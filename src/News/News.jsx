import { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

const News = () => {
  const [hollywoodNews, setHollywoodNews] = useState([]);
  const [singleHollywoodNews, setSingleHollywoodNews] = useState([]);
  const [bollywoodNews, setBollywoodNews] = useState([]);
  const [singleBollywoodNews, setSingleBollywoodNews] = useState([]);

  const bollywoodNewsApi =
    "https://gnews.io/api/v4/top-headlines?category=general&q=bollywood&apikey=18ff1263842a70d3b30ec5e640ac1634";

  const hollywoodNewsApi =
    "https://gnews.io/api/v4/top-headlines?category=general&q=hollywood&apikey=18ff1263842a70d3b30ec5e640ac1634";

  useEffect(() => {
    const fetchHollywoodNews = async (url) => {
      const response = await axios.get(url);
      setHollywoodNews(response.data.articles.slice(0, 2));
      setSingleHollywoodNews(response.data.articles.slice(2, 3));
      // console.log(hollywoodNews)

      //  ? for random
    };

    const fetchBollywoodNews = async (url) => {
      const response = await axios.get(url);
      setBollywoodNews(response.data.articles);
      setSingleBollywoodNews(response.data.articles.slice(1, 2));
    };

    fetchHollywoodNews(hollywoodNewsApi);
    fetchBollywoodNews(bollywoodNewsApi);
  }, []);

  return (
    <section className="news">
      <div className="news_container">
        <h1 className="">LATEST NEWS</h1>
        <div className="main_newsContainer">
          {singleBollywoodNews?.map((item) => {
            return (
              <div className="hero_news" key={item.url}>
                <div className="image_half">
                  <img src={item.image} alt="" />
                </div>
                <div className="text_half">
                  <a className="text_half_h" href={item.url}>
                    {item.title}
                  </a>
                  <p className="text_half_date">{item.publishedAt}</p>
                  <p className="text_half_p">{item.description}</p>
                </div>
              </div>
            );
          })}

          <div className="more_news">
            <h1>More latest news</h1>
            <div className="more_news_list_container">
              {hollywoodNews?.map((item) => {
                return (
                  <div className="card" key={item.url}>
                    <a className="more_news text_half_h" href={item.url}>
                      {item.title}
                    </a>
                    <p className="more_news_date text_half_date">
                      {item.publishedAt}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
