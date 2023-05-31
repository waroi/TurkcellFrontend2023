import Body from "../Body";
import Image from "../Image";
import Title from "../Title";

const card = ({dataImg}) => {
  return (
    <div>
        <Image imageUrl={dataImg.download_url}/>
        <Title title={dataImg.title}/>
        <Body body={dataImg.body}/>
    </div>
  )
}

export default card;