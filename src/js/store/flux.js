import data from "../../resources/data/mockData.json";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: data,
    },
    actions: {
      //! -- DATA CONVERTERS -- //
      /**
       * ! Data Shortener
       * * AslanSN - 22-06-10
       * ? Shortens store.data.discipline === Water & Sewer Supply
       * @param {String} string - Discipline
       * @returns string
       */
      disciplineShortener: (string) =>
        string === "Water & Sewer Supply" ? "Water & Sewer" : string,
      /**
       * ! Data Shortener and Converter and Filtering
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

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
