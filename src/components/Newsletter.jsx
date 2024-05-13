import News from "../shared/News";
import BannerImg from "../assets/banner.png"

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <News banner={BannerImg} heading={"Each student an share their discount code for friends"} subheading={"A good example of a pragraph contains a topic sentence, details and a conclusion.There are many different kinds of animals that live in China."} btn1={"I have a code"} />
        </div>
    )
}

export default Newsletter