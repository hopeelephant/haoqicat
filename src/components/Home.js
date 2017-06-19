import React,{Component} from 'react';
const courseItemData = [
    {
        imgAddress: "http://o86bpj665.bkt.clouddn.com/posters/gulp-flex-res.png",
        describe: "Gulp-Flexbox 响应式网站课程"
    }, {
        imgAddress: "http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png",
        describe: "Meteor-React 小鸟课程"
    }, {
        imgAddress: "http://o86bpj665.bkt.clouddn.com/posters/happypeter-js-kingdom.png",
        describe: "Happypeter 的摩登 JS 王国"
    }, {
        imgAddress: "http://o86bpj665.bkt.clouddn.com/posters/webpack-react-mole.png",
        describe: "Webpack-React 鼹鼠"
    }, {
        imgAddress: "http://o86bpj665.bkt.clouddn.com/posters/meteor-express-ajax.png",
        describe: "Meteor-Express Ajax 方案对比"
    }, {
        imgAddress: "http://o86bpj665.bkt.clouddn.com/posters/ride-cli-monster.png",
        describe: "驾驭命令行怪兽"
    }
]

class Home extends Component {
    render() {
        let courseItem = courseItemData.map((item, index) => (
            <div className="course-item" key={index}>
                <a href="#">
                    <img src={item.imgAddress}/>
                </a>
                <div>
                    {item.describe}
                </div>
            </div>
        ))
        return (
            <div className="home">
                <div className="courses">
                    已发布课程
                </div>
                <div className="course">
                    {courseItem}
                </div>
            </div>
        )
    }
}

export default Home
