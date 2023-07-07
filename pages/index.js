import Layout from "../components/layout";
import Heading from "../components/heading";
import RightPane1 from "../components/home/RightPane";
import LeftPane from "../components/home/LeftPane";
const Index = ({}) => {
  return (
    <>
      <Heading title={"Ini's Portfolio"} />
      <Layout>
        <div className="border-top-1">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <LeftPane />
            </div>
            <div className="col-md-5 d-xs-none d-sm-none d-md-block">
              <RightPane1 />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
