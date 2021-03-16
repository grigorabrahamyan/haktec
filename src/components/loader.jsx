import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Loader() {
  return (
    <SkeletonTheme color='#86bc25' highlightColor="#444">
      <p>
        <Skeleton count={5} circle={true} height={30} width={30} />
      </p>
    </SkeletonTheme>
  );
}

export default Loader;