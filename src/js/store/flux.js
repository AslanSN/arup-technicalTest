import data from "../../resources/data/mockData.json";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: data,
      details: {
        selected: false,
        dataDetails: {},
      },
    },
    actions: {
      //! -- DATA MANIPULATERS -- //
      /**
       * ! Formatter
       * * AslanSN - 22-06-07
       * @param {object} object - Date
       * @returns European date format
       */
      europeanDateFormatter: (object) =>
        object.getDate() +
        "." +
        (object.getMonth() + 1 < 10
          ? "0" + (object.getMonth() + 1)
          : object.getMonth() + 1) +
        "." +
        object.getFullYear(),
      /**
       * ! Data Shortener
       * * AslanSN - 22-06-10
       * ? Shortens disciplines to have 3 or less words
       * @param {String} string - Discipline
       * @returns string
       */
      disciplineShortener: (string) => {
        const disciplineArray = string.split(" ");

        return disciplineArray.length > 3
          ? `${disciplineArray[0]} ${disciplineArray[1]} ${disciplineArray[2]}`
          : string;
      },

      /**
       * ! Data Shortener, Converter and Filtering
       * * AslanSN - 22-06-10
       * ? Using titleExtractor() Shortens efficiently the name received
       * @param {string} string
       * @returns {string} string
       */
      initialsAndSurnameExtractor: (string) => {
        const actions = getActions();
        const wholeNameArray = string.split(" ");
        let firstInitial = "";
        let surname = wholeNameArray[wholeNameArray.length - 1];
        let wholeName = "";

        if (wholeNameArray.length === 2) {
          firstInitial = wholeNameArray[0][0].toUpperCase() + ".";
          wholeName = `${firstInitial} ${surname}`;
        } else if (wholeNameArray.length > 2) {
          firstInitial = actions.titleExtractor(
            wholeNameArray[0].toLowerCase()
          );
          let secondInitial = wholeNameArray[1][0].toUpperCase() + ".";
          wholeName = `${firstInitial} ${secondInitial} ${surname}`;
        }
        return wholeName;
      },
      /**
       * ! Data Shortener & Converter
       * * AslanSN - 22-06-10
       * ? Method for initialsAndSurnameExtractor()
       * @param {string} string - LOWERCASED First Word Name
       * @returns {string} string - Title
       */
      titleExtractor: (string) => {
        switch (string) {
          case "miss":
          case "madame":
          case "misses":
          case "ms.":
          case "mrs.":
          case "mss.":
            return "Ms.";
            break;
          case "mister":
          case "mr.":
            return "Mr.";
            break;
          case "doctor":
          case "dr.":
            return "Dr.";
            break;
          case "sir":
            "Sir";
            break;
          default:
            return string.substring(0, 1).toUpperCase() + ".";
        }
      },
      sortByNumber: () => {
        const store = getStore();
        const reversedData = store.data.reverse();
        setStore({ data: reversedData });
      },
      // changeShowState: (event, id) => {},
      // ! -- HOOKS -- //
      hooks: {
        useCollapsible: (id) => {
          const store = getStore();
          const numId = store.details.dataDetails.num;
          const newData = store.data[id];
          let selected = store.details.selected;

          // console.log(store.details.selected, id, numId, newData);
          // const
          // if (numId !== id) {
          // }
          setStore({
            details: {
              selected: numId !== id ? (selected = true) : !selected,
              dataDetails: newData,
            },
          });
          store.details.selected ? window.scrollTo(1000, 150) : null;

          // return store.details.selected ? ":active" : "";
          // console.log(store.details.selected, id, store.details.dataDetails);
        },
      },
      // loadSomeData: () => {
      //   /**
      // 		fetch().then().then(data => setStore({ "foo": data.bar }))
      // 	*/
      // },
      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
      // },
    },
  };
};

export default getState;
