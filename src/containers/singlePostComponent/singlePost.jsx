import "./singlePost.css";
export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GypOcz_pT1axgYCtQuy1nK2va4HwH7lNOg&usqp=CAU"
          alt="img"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet elit
          <div className="singlePostEdit">
            <i className="singlePostIcon edit far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Luco</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat
          deserunt officia nobis fugit hic explicabo voluptatibus sequi atque?
          Necessitatibus accusantium similique odio animi laborum atque
          perferendis ullam modi deserunt! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos repellat deserunt officia nobis
          fugit hic explicabo voluptatibus sequi atque? Necessitatibus
          accusantium similique odio animi laborum atque perferendis ullam modi
          deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          repellat deserunt officia nobis fugit hic explicabo voluptatibus sequi
          atque? Necessitatibus accusantium similique odio animi laborum atque
          perferendis ullam modi deserunt!
        </p>
      </div>
    </div>
  );
}
