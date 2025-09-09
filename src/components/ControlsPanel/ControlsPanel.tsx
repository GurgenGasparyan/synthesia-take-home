import React, { useState } from 'react';
import { blurImage, bwImage } from '../../utils/utils';
import Button from '../Button';
import Input from '../Input/Input';
import Preview from '../Preview';
import BlurSlider from '../Slider';
import ToggleSwitch from '../ToggleSwitch';

import { useControlParams } from '../../hooks/useControlParams';
import './ControlsPanel.css';

type ControlsPanelProps = {
  url: string;
  imageHeight: number;
  imageWidth: number;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({url, imageHeight, imageWidth}) => {
  const { defaultWidth, defaultHeight, defaultIsBw, defaultBlur, setParams } = useControlParams({ imageHeight, imageWidth });  
  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const width = formData.get('width') as string;
    const height = formData.get('height') as string;
    const isBw = formData.get('isBw') as string === 'on';
    const blur = formData.get('blur') as string;

    if(!url) {
      return null
    }
    if(isBw) {
      url = bwImage(url, isBw);
    }
    
    if(Number(blur)) {
      url = blurImage(url, Number(blur));
    }

    setParams({ width, height, isBw: isBw.toString(), blur });

    setFinalImageUrl(url);
    setIsPreviewOpen(true);
  };

  const onClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="controls-panel">
      <h3 className="controls-panel-title">Image Controls</h3>
      <form onSubmit={handleApply} className="controls-panel-content">
        <Input
          required
          name="width"
          label="Width"
          min={1}
          max={10000}
          defaultValue={defaultWidth}
          type="number"
          placeholder="Enter width"
        />
        
        <Input
          required
          name="height"
          label="Height"
          min={1}
          max={10000}
          defaultValue={defaultHeight}
          type="number"
          placeholder="Enter height"
        />
        
        <ToggleSwitch
          name="isBw"
          label="Black & White"
          defaultValue={defaultIsBw}
        />
        
        <BlurSlider
          name="blur"
          label="Blur"
          defaultValue={defaultBlur}
          min={0}
          max={10}
        />
        
        <Button label="Preview" type="submit" />

        {isPreviewOpen && finalImageUrl ? <Preview onClose={onClosePreview} imageUrl={finalImageUrl} width={defaultWidth} height={defaultHeight} /> : null}
      </form>
    </div>
  );
};

export default ControlsPanel;
