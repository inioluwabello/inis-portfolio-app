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
          <div className="col-md-12 col-lg-7">
            <LeftPane />
          </div>
          <div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5">
            <RightPane />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
