import Layout from "../components/layout";
import Heading from "../components/heading"
import LeftPane from "../components/home/LeftPane";
import RightPane from "../components/home/RightPane";
const Index = ({}) => {
  return (
    <>
      <Heading title={"NewsLetter Sign Up"} />
      <Layout>
        <div className="row">
          <div className="col">
            <LeftPane />
          </div>
          <div className="col">
            <RightPane />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
