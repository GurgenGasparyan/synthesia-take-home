import ControlsPanel from '../../components/ControlsPanel/ControlsPanel';
import { useImageInfo } from '../../hooks/useImageInfo';

const Edit = () => {
  const { data, isLoading, error } = useImageInfo();

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  if(!data) {
    return <div>Image not found</div>;
  }

  const { width, height, download_url } = data;

  return (

    <>
      <div className="app-image-section">
        <img src={download_url} width={800} height={600} />
      </div>
      <ControlsPanel url={download_url} imageHeight={height} imageWidth={width} />
    </>

  )
}

export default Edit
