import { Component, Taro } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";

const mapState = state => ({
  num: state.count.num
});
// 注入store
const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  decrement: () => dispatch.count.decrement(1),
  incrementAsync: () => dispatch.count.incrementAsync(1)
});

@connect(
  mapState,
  mapDispatch
)
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    //console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { increment, decrement, incrementAsync, num } = this.props;
    return (
      <View className="index">
        <Button className="add_btn" onClick={increment}>
          +
        </Button>
        <Button className="dec_btn" onClick={decrement}>
          -
        </Button>
        <Button className="dec_btn" onClick={incrementAsync}>
          async
        </Button>
        <View>
          <Text>{num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default Index;
