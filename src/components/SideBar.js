function SideBar({ onChose }) {
  // const list = ["Cocomelon", "Oddbods", "PAW", "Tom & Jerry", "Different"];
  const list = [
    {
      img:
        "https://demo.joomlaworks.net/media/k2/items/cache/a522a6005d1cb428ea34ef1769cd7452_XL.jpg?t=20220722_202550",
      name: "All",
    },
    // {
    //   img:
    //     "https://dxzzl9f8kqexi.cloudfront.net/wp-content/uploads/2021/11/23111048/CoComelon.png",
    //   name: "Cocomelon",
    // },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2bb1f450c58ba5879c76da1bf0b1193cefb123c63c2364a491f3944ffb92cb5._RI_V_TTW_.jpg",
      name: "Oddbods",
    },
    {
      img:
        "https://static.bandainamcoent.eu/high/paw-patrol/brand-setup/paw-patrol_thumb_brand_624x468.jpg",
      name: "PWA",
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/TomandJerryTitleCardc.jpg/220px-TomandJerryTitleCardc.jpg",
      name: "Tom and Jerry",
    },
    {
      img:
        "https://develop.net.ua/wp-content/uploads/elementor/thumbs/01-oyijvtg9yv4oc3yeh0lyuolxaed95j7wbfgygtlm2o.png",
      name: "Develop",
    },
  ];
  return (
    <div className="fixed inset-0 bg-white">
      <div className="bg-white h-full pt-[60px] flex justify-center items-center">
        <ul>
          {list.map(({ img, name }, i) => {
            return (
              <li
                key={i}
                onClick={() => onChose(name)}
                className="hover:bg-gray-100 m-2 px-2 py-1 cursor-pointer flex items-center gap-2"
              >
                <img
                  src={img}
                  className="w-[60px] h-10 object-cover rounded"
                  alt={name}
                />
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
