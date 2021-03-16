import { useMemo } from "react";

function Middle({ input, categories, handleChangeMenu, handleAddThing, choosenThings, data }) {

  const correctInfo = useMemo(() => {
    let result = { ...data };
    if (input.length > 1) {
      let arr = [];
      Object.values(result).forEach((item) => {
        item.contentInf.forEach((item) => {
          if (item.name.toUpperCase().includes(input.toUpperCase()))
            arr.push(item);
        });
      });
      return arr;
    }
    if (categories === "ALL") {
      let arr = [];
      Object.values(result).forEach((item) => {
        item.contentInf.forEach((item) => arr.push(item));
      });
      return arr;
    }
    return result[categories].contentInf;
  }, [categories, data, input]);

  const title = categories !== "ALL" ? <p>{data[categories].catName}</p> : null;
  const descripion =
    categories !== "ALL" ? <p>{data[categories].description}</p> : null;

  return (
    <section className="middle__section">
      <div className="middle__categories categories">
        <div className="categories__nav">
          <ul>
            <li></li>
            <li className={categories === 'ALL' ? 'active' : ''} onClick={() => handleChangeMenu("ALL")}>
              <p>{"ALL"}</p>
            </li>
            {Object.keys(data).map((item, index) => {
              return (
                <li key={index} className={categories === item ? 'active' : ''} onClick={() => handleChangeMenu(item)}>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="middle__mainInfo mainInfo">
        <div className="mainInfo__titles">
          {title}
          {descripion}
        </div>
        <div className="mainInfo__items">
          <div className="mainInfo__items-wrapper row15">
            {correctInfo.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mainInfo__item item__wrapper col15"
                >
                  <div className="item">
                    <a href={item.download_link} rel='noreferrer' target={'_blank'}>
                      <div className="item__img-wrapper">
                        <div className="item__img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="item__title">
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </a>
                    <div className={`item__button ${choosenThings[item.id] ? 'added' : ''}`}>
                      <button onClick={() => handleAddThing(item)}>ADD</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
