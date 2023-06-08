import { useParams } from "react-router-dom";

const ParametreView = () => {
  const { id } = useParams();
  return <div>ParametreView</div>;
};
//birkaç sayfalık uygulama yap haber sayfası
//haber sayfasına gitsin
//navigasyon bar ile linklerle
//bu bir deneme yazisidir
export default ParametreView;
