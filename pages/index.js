import Layout from "../components/layout";
import Heading from "../components/heading";
import RightPane1 from "../components/home/RightPane";
import LeftPane from "../components/home/LeftPane";
const Index = ({}) => {
  return (
    <>
      <Heading title={"New App"} />
      <Layout>
        <div className="border-top-1">
          <div className="row">
            <div className="col">
              <LeftPane />
            </div>
            <div className="col d-sm-none d-md-block">
              <RightPane1 />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
