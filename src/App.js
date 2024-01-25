import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FullNewsArticle from './components/FullNewsArticle';
import axios from 'axios';
import './App.css';

const dummyData = {
  meta: {
    found: 931240,
    returned: 10,
    limit: 10,
    page: 1
  },
  data: [
    {
      uuid: "8232fa99-f380-460e-b766-f578b3a44a61",
      title: "How cyberscams are drawing China into Myanmar’s civil war",
      description:
        "The surprising connection among cybercrime, human trafficking, and a raging guerrilla war.",
      keywords: "",
      snippet:
        "Last fall, a coalition of rebel groups known as the Three Brotherhood Alliance launched a rapid-fire offensive across Myanmar’s northern Shan state, quickly o...",
      url:
        "https://www.vox.com/world-politics/2024/1/18/24041696/cyberscams-myanmar-china-pig-butchering",
      image_url:
        "https://cdn.vox-cdn.com/thumbor/tOqtkDM7pzq_VdJpHH-qj1i4QEo=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25232097/Vox_JaredBartman.png",
      language: "en",
      published_at: "2024-01-18T11:12:53.000000Z",
      source: "vox.com",
      categories: ["general", "politics", "entertainment"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "e9fdca4e-4fd1-460e-8dc5-f2ea8e81d693",
      title:
        "Another Code: Recollection brings cult classic mystery games to the Switch",
      description:
        "Another Code: Recollection brings two games, previously released on the Nintendo DS and Wii, in an updated format for the Nintendo Switch, launching on January ...",
      keywords: "",
      snippet:
        "For a while there, the Nintendo DS was the place to go for mystery games. Leading the way were the courtroom antics of the Ace Attorney series and the puzzle bo...",
      url:
        "https://www.theverge.com/24041577/another-code-recollection-review-nintendo-switch",
      image_url:
        "https://cdn.vox-cdn.com/thumbor/Chy3NEBSYYJ8gz35xgrq6AfykVY=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/25231733/Switch_AnotherCodeRecollection_scrn_03.jpg",
      language: "en",
      published_at: "2024-01-18T11:12:40.000000Z",
      source: "theverge.com",
      categories: ["tech"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "dfb37566-9a86-48b3-8755-7ba428423162",
      title:
        "NYC councilman Yusef Salaam — one of the exonerated Central Park 5 — to chair committee overseeing NYPD",
      description:
        "New York City’s newly sworn-in Councilmember Yusef Salaam — one of the exonerated Central Park Five — is set to take over as chair of the council committe...",
      keywords: "News, city council, new york city",
      snippet:
        "New York City’s newly sworn-in Councilmember Yusef Salaam — one of the exonerated Central Park Five — is set to take over as chair of the council committe...",
      url:
        "https://nypost.com/2024/01/18/news/nyc-councilman-yusef-salaam-one-of-the-exonerated-central-park-5-to-chair-committee-overseeing-nypd/",
      image_url:
        "https://nypost.com/wp-content/uploads/sites/2/2024/01/75063460-1.jpg?quality=75&strip=all&w=1024",
      language: "en",
      published_at: "2024-01-18T11:03:41.000000Z",
      source: "nypost.com",
      categories: ["general"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "0764cef1-9080-46a9-b6da-3a5483cdbd84",
      title: "Treasury yields dip ahead of jobless claims and housing data",
      description:
        "Bond yields fell on Thursday as the recalibration of expected Federal Reserve interest rate cuts continued to be the main focus for traders.What’s happening.....",
      keywords:
        "article_normal, N/A, Government Finance, Government Borrowing, Economic News, Debt/Bond Markets, Commodity/Financial Market News, Content Types, Factiva Filters, C&E Exclusion Filter, government finance, government borrowing, economic news, debt, bond markets, commodity, financial market news, content types, factiva filters, c&e exclusion filter, n, a",
      snippet:
        "Bond yields fell on Thursday as the recalibration of expected Federal Reserve interest rate cuts continued to be the main focus for traders.\n\nSome sturdy U.S. e...",
      url:
        "https://www.marketwatch.com/story/treasury-yields-dip-ahead-of-jobless-claims-and-housing-data-306f0cbe?mod=mw_rss_topstories",
      image_url: "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
      language: "en",
      published_at: "2024-01-18T11:02:00.000000Z",
      source: "marketwatch.com",
      categories: ["business", "general"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "8d61002c-6bde-49a9-9334-5823e2bfa594",
      title:
        "Why we like health-care stocks in 2024 despite their spotty record in presidential election years",
      description:
        "Critical rhetoric and policy uncertainty tend to weigh on health-care stocks in presidential election years. But we like many in the industry this year.",
      keywords:
        "UnitedHealth Group Inc, Humana Inc, General Electric Co, Bausch Health Companies Inc, Bausch Health Companies Inc, Novo Nordisk A/S, Walgreens Boots Alliance Inc, Abbott Laboratories, Novartis AG, Novartis AG, Amgen Inc, Danaher Corp, GE HealthCare Technologies Inc, stock takes, Jim Cramer, Investment strategy, Markets, Breaking News: Markets, S&P 500 Index, Biogen Inc, Eisai Co Ltd, Eli Lilly and Co, Pharmaceuticals, Health care industry, business news",
      snippet:
        "As the old Wall Street adage goes, health care tends to underperform the stock market in presidential election years — and in recent cycles, that's been true....",
      url:
        "https://www.cnbc.com/2024/01/18/we-like-health-care-stocks-in-2024-despite-presidential-election-year-weakness.html",
      image_url:
        "https://image.cnbcfm.com/api/v1/image/107261718-1687534870553-gettyimages-492437718-Par8299503.jpeg?v=1705522379&w=1920&h=1080",
      language: "en",
      published_at: "2024-01-18T11:01:01.000000Z",
      source: "cnbc.com",
      categories: ["general", "business"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "ef0dc5de-d399-4c2d-99a0-88825d06a785",
      title:
        "Biden judicial appointee draws scrutiny over ties to controversial 9/11 memorial event",
      description:
        "The non-profit watchdog StopAntisemitism said Biden nominee Adeel Mangi’s association with Rutgers Center for Security, Race, and Rights (CSRR) will affect hi...",
      keywords: "News, antisemitism, joe biden, judges, muslim",
      snippet:
        "A prominent Jewish rights organization said it has “serious concerns” over President Biden’s nomination to a US court of appeals — over his ties to a co...",
      url:
        "https://nypost.com/2024/01/18/news/biden-judicial-appointee-adeel-mangi-draws-scrutiny-over-ties-to-controversial-9-11-memorial-event/",
      image_url:
        "https://nypost.com/wp-content/uploads/sites/2/2024/01/Rutgers-comp-2.jpg?quality=75&strip=all&w=1024",
      language: "en",
      published_at: "2024-01-18T11:00:55.000000Z",
      source: "nypost.com",
      categories: ["general"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "b3d7f4a6-3d83-40ab-99b8-4b778559291d",
      title:
        "Lumumba’s legacy precious to all Africans – Ghanian leader’s daughter",
      description:
        "Africans commemorate Patrice Lumumba’s memory, his work and his example, Samia Nkrumah has told RT",
      keywords: "",
      snippet:
        "Despite the continent’s political independence, big corporations retain economic control, Samia Nkrumah has told RT\n\nThe legacy of Patrice Lumumba is both ric...",
      url:
        "https://www.rt.com/africa/590867-patrice-lumumba-africa-independence/",
      image_url:
        "https://mf.b37mrtl.ru/files/2024.01/article/65a8f1082030277ad918a919.jpg",
      language: "en",
      published_at: "2024-01-18T10:51:32.000000Z",
      source: "rt.com",
      categories: ["general", "politics"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "6cd2701e-0e31-472b-9d60-0c91e978a1f6",
      title:
        "Power line falls on car during Oregon ice storm, killing 3, authorities say",
      description:
        "The storm hit the northwest corner of the U.S. as much of the rest of the country coped with bitter weather that in some places put electricity supplies at risk...",
      keywords: "",
      snippet:
        "Power line falls on car during Oregon ice storm, killing 3, authorities say\n\nEnlarge this image toggle caption AP AP\n\nPORTLAND, Ore. — A power line fell on a ...",
      url: "https://www.npr.org/2024/01/18/1225314374/oregon-ice-storm-kills-3",
      image_url:
        "https://media.npr.org/assets/img/2024/01/18/ap24017856447795_wide-b5d203e7cf2f8a6fe4aea15a9dae737ac8e227d4-s1400-c100.jpg",
      language: "en",
      published_at: "2024-01-18T10:50:41.000000Z",
      source: "npr.org",
      categories: ["general"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "11abed01-5fec-46e5-9c59-5a166561df6e",
      title: "Phony Originalism Could Cost Florida Women Their Abortion Rights",
      description:
        "A challenge to Florida’s stringent abortion regime is currently before the conservative Supreme Court of Florida.",
      keywords: "",
      snippet:
        "A challenge to Florida’s stringent abortion regime is currently before the conservative Supreme Court of Florida. The challenge is based on Florida’s right ...",
      url:
        "https://slate.com/news-and-politics/2024/01/phony-originalism-florida-abortion-rights-desantis.html?via=rss",
      image_url:
        "https://compote.slate.com/images/32079f14-2888-4a6f-bed7-3a5501575da3.jpeg?crop=2000,1333,x0,y0&width=1560",
      language: "en",
      published_at: "2024-01-18T10:50:00.000000Z",
      source: "slate.com",
      categories: ["general"],
      relevance_score: null,
      locale: "us"
    },
    {
      uuid: "38c044f2-b1a3-47f3-8b15-8b8e3faff76b",
      title:
        "Meme Coin Named After Donald Trump Surges 50% After Ex-President Says No To CBDCs",
      description:
        "The meme cryptocurrency named after Donald Trump, known as TRUMP, has seen its value on decentralized exchanges jump by 50%",
      keywords: "",
      snippet:
        "Loading... Loading...\n\nThe meme cryptocurrency named after Donald Trump, known as TRUMP, has seen its value on decentralized exchanges jump by 50%\n\nWhat Happene...",
      url:
        "https://www.benzinga.com/markets/cryptocurrency/24/01/36673895/meme-coin-named-after-donald-trump-surges-50-after-ex-president-says-no-to-cbdcs",
      image_url:
        "https://cdn.benzinga.com/files/images/story/2024/Donald-Trump_22.jpeg?width=1200&height=800&fit=crop",
      language: "en",
      published_at: "2024-01-18T10:46:29.000000Z",
      source: "benzinga.com",
      categories: ["business"],
      relevance_score: null,
      locale: "us"
    }
  ]
};

const App = () =>{
  const [articleData, setArticleData] = useState(dummyData);
  const [fullArticleUrl, setFullArticleUrl] = useState(); 
  const [searchInputValue, setSearchInputValue] = useState("");

  const [toggleSearchFieldFilters, setToggleSearchFieldFilters] = useState(
    false
  );
  const [searchFieldFilters, setSearchFieldFilters] = useState({
    title: true,
    description: false,
    keywords: false,
    main_text: true
  });

  //gets the url of the article which is attached to a custom data property on each MiniNewsArticle
  const getArticleUrl = (e) => {
    let url = e.target.getAttribute("data-url");
    setFullArticleUrl(url);
  };
  const hideArticle = () => setFullArticleUrl("");
  const searchHandler = (e) => {
    setSearchInputValue(e.target.value);
  };
  //makes a request to thenewsapi.com API hitting the news/all endpoint, sets dummyData in case of error
  const fetchData = () => {
    let getRequest = `https://api.thenewsapi.com/v1/news/all?api_token=eNDf9OmQDBQQCpw1fwtfZKCrPVf5O1d1ibNMqbRp&language=en&limit=3&sort=published_at&search=${searchInputValue}&search_fields=${reduceSearchFieldFilters()}`;
    axios
      .get(encodeURI(getRequest))
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((error) => setArticleData(response.data));
  };
  const onClickSearch = (e) => {
    fetchData();
  };

  const searchFieldFilterReducer = (acc, obj) => {
    if (obj[1]) {
      return acc + "," + obj[0];
    }
  };
  const reduceSearchFieldFilters = () => {
    return Object.entries(searchFieldFilters).reduce(searchFieldFilterReducer);
  };
  const searchFieldStateHandler = (field) => {
    let state = { ...searchFieldFilters };
    state[field] = !state[field];
    setSearchFieldFilters(state);
  };
  const showSearchFieldFiltersHandler = () => {
    setToggleSearchFieldFilters(!toggleSearchFieldFilters);
  };

  return (
    <div>
      <Header
        searchFieldStateHandler={searchFieldStateHandler}
        filterState={searchFieldFilters}
        searchHandler={searchHandler}
        onClickSearch={onClickSearch}
        searchInputValue={searchInputValue}
        showSearchFieldFiltersHandler={showSearchFieldFiltersHandler}
        toggleSearchFieldFilters={toggleSearchFieldFilters}
        showBackButton={fullArticleUrl}
        onBackBtnClicked={hideArticle}
      />
      {fullArticleUrl ? (
        <FullNewsArticle url={fullArticleUrl} hideArticle={hideArticle} />
      ) : (
        <HomePage articleData={articleData} onClickArticle={getArticleUrl} />
      )}
    </div>
  );
}

export default App;
