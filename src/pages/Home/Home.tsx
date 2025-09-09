import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";

const Home = () => {
  const [imageId, setImageId] = useState("");

  const onImageIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageId(e.target.value);
  }

  return (
    <div>
      <Input type="text" placeholder="Enter image ID" label="Image ID" value={imageId} onChange={onImageIdChange} />
      <Button disabled={!imageId} label="Edit" to={`/edit/${imageId}`} type="link" />
    </div>
  )
}

export default Home
