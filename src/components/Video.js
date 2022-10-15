import { useParams } from "react-router-dom";
import Card from "./Card";
import List from "./List";
function Video({ hideTitle = true, videoList = [], onReadyPlayer }) {
  let { id } = useParams();
  return (
    <div className="relative h-full pb-[210px] md:p-0">
      <div className="fixed lg:static z-10 w-screen top-0">
        <Card
          url={id}
          autoplay={1}
          light={false}
          fixed={true}
          preventPlay={false}
          fullscreen={true}
          hideTitle={hideTitle}
          className="md:h-[365px]"
          onReadyPlayer={onReadyPlayer}
        >
          <div className="overflow-y-scroll overflow-x-hidden w-full">
            <List hideTitle={false} />
          </div>
        </Card>
      </div>
    </div>
  );
}
export default Video;
