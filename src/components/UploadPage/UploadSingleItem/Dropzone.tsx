import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './styles';
import { ReactComponent as VideoIcon } from 'icons/yt.svg';
import assetsApi from 'api/assets';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useStore } from './store';
import Spinner from 'components/UI/Spinner';
import View from 'components/UI/View';

const Dropzone = () => {
  const { setAsset } = useStore();
  const [progress, setProgress] = useState(0);
  const [isUploading, setUploading] = useState(false);
  const [isProcessing, setProcessing] = useState(false);

  const config = useMemo(() => {
    return {
      onUploadProgress: function (progressEvent: ProgressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      },
    }
  }, []);
  const poll:any = useCallback(
    (id: number) => {
      setTimeout(() => fetchAsset(id), 1000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const fetchAsset = useCallback(
    async (id: number) => {
      const res = await assetsApi.fetchAsset(id);
    if (res.status === 'PROCESSING') {
      poll(id);
    } else {
      setAsset(res);
      setProgress(0);
      setUploading(false);
      setProcessing(false);
    }
    return res;
    },
    [poll,setAsset],
  )



  const upload = useCallback(async (file: File) => {
    setUploading(true);
    const form = new FormData();
    form.append('file', file);
    try {
      const res = await assetsApi.upload(form, config);
      setProcessing(true);
      poll(res.id);
    } catch {
      setProgress(0);
      setUploading(false);
      setProcessing(false);
    }

  },[config,poll]);
  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles.length) return;
    upload(acceptedFiles[0]);
  }, [upload]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <S.Dropzone {...getRootProps()}>
      <input {...getInputProps()} accept="video/mp4, image/jpg, image/png, video/mov" />
      {isProcessing ? (
        <div>
          <Spinner size="xl" />
          <View marginT={12}>Processing</View>
        </div>
      ) : isUploading ? (
        <S.Progress>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: '#7549D4',
              textColor: '#7549D4',
            })}
            value={progress === 100 ? 99 : progress}
            text={`${progress === 100 ? 99 : progress}%`}
          />
        </S.Progress>
      ) : (
        <>
          <VideoIcon />
          <p>
            <strong>Drag & Drop File</strong>
            or <span>browse media on your device</span>
          </p>
        </>
      )}
    </S.Dropzone>
  );
};

export default Dropzone;
