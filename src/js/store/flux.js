import data from "./data/mockData.json";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: data,
      details: {
        selected: false,
        dataDetails: {},
      },
      families: {
        "Num.": {},
        Discipline: {},
        "Reg. Date": {},
        "Sent to": {},
        Subject: {},
        Status: {},
        Critical: {},
        Message: {},
      },
      checked: false,
    },
    actions: {
      //! -- DATA MANIPULATORS -- //
      /**
       * ! Reverser
       * * AslanSN - 22-06-13
       * ? Reads the data and sets it in reverse
       * @param {json} data
       * @return Reversed data.json
       */
      handleData: () => {
        let json = require("./data/mockData.json");
        setStore({ data: json.reverse() });
      },
      /**
       * ! data Regenerator
       * * AslanSN - 22-06-13
       * @return {array} data - Array of Objects
       */
      regenData: () => {
        setStore({ data: data });
      },
      /**
       * ! Father catcher & Setter
       * * AslanSN - 22-06-13
       * ? Searchs for types of info calling catchers
       *
       */
      familiesValuesRepetitions: () => {
        const store = getStore(),
          actions = getActions(),
          data = store.data,
          catchers = actions.catchers,
          disciplines = actions.objectSorter(catchers.disciplinesCatcher(data)),
          subjects = actions.objectSorter(catchers.subjectCatcher(data)),
          status = actions.objectSorter(catchers.statusCatcher(data)),
          criticals = actions.objectSorter(catchers.criticalCatcher(data));

        setStore({
          families: {
            Discipline: disciplines,
            Subject: subjects,
            Status: status,
            Critical: criticals,
          },
        });
      },
      /**
       * !CATCHERS
       * * AslanSN 22-06-13
       * Functions to catch the distinct elements
       * and the number of repetitions
       */
      catchers: {
        disciplinesCatcher: (array) => {
          let discipline = {};
          array.forEach((object) => {
            const disciplines = object.discipline;
            if (discipline[disciplines] === discipline[disciplines])
              discipline[disciplines] = discipline[disciplines] + 1 || 1;
          });

          return discipline;
        },
        regDateCatcher: (array) => {
          // const store = getStore();
          let regDate = {};
          array.forEach((object) => {
            const regDates = object.regDate;
            if (regDate[regDates] === regDate[regDates])
              regDate[regDates] = regDate[regDates] + 1 || 1;
          });
          return regDate;
        },
        subjectCatcher: (array) => {
          let subject = {};
          array.forEach((object) => {
            const subjects = object.subject;
            if (subject[subjects] === subject[subjects])
              subject[subjects] = subject[subjects] + 1 || 1;
          });
          return subject;
        },
        statusCatcher: (array) => {
          let status = {};
          array.forEach((object) => {
            const statuses = object.status;
            if (status[statuses] === status[statuses])
              status[statuses] = status[statuses] + 1 || 1;
          });
          return status;
        },
        criticalCatcher: (array) => {
          let critical = {};
          array.forEach((object) => {
            const criticals = object.critical;
            if (critical[criticals] === critical[criticals])
              critical[criticals] = critical[criticals] + 1 || 1;
          });
          return critical;
        },
      },
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
       * TODO: discerning between middle names, surnames and subtitles
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
      //! SORTERS //
      /**
       * ! Sorter - Reverse
       * * AslanSN - 22-06-12
       * ? Inverts the order of the Data
       * @param {object} store
       * @returns Reversed data
       */
      sortByNumber: () => {
        const store = getStore();

        setStore({ data: store.data.reverse() });
      },
      /**
       * !Sorter
       * * AslanSN 22-06-13
       * ? Sorts object by his keys
       * @param {object} obj
       * @returns {object} - sorted
       */
      objectSorter: (obj) => {
        const sorted = Object.keys(obj)
          .sort()
          .reduce((accumulator, key) => {
            accumulator[key] = obj[key];

            return accumulator;
          }, {});
        return sorted;
      },

      //! FILTERS //
      /**
       * ! Filter
       * * AslanSN - 22-06-13
       * @param {string} family
       * @param {string} key
       */
      filterData: (family, key) => {
        const store = getStore(),
          familyes = family,
          filtered = store.data.filter((object) => object[familyes] === key);
        setStore({ data: filtered });
      },

      familiesConverter: (string) => {
        switch (string) {
          case "Num.":
            return "num";
            break;
          case "Discipline":
            return "discipline";
            break;
          case "Reg. Date":
            return "regDate";
            break;
          case "Sent to":
            return "sentTo";
            break;
          case "Subject":
            return "subject";
            break;
          case "Status":
            return "status";
            break;
          case "Critical":
            return "critical";
            break;
          case "Message":
            return "message";
            break;
          default:
            string;
        }
      },

      // ! -- HOOKS -- //
      hooks: {
        /**
         * ! HOOK - Collapsible
         * * AslanSN - 22-06-12
         * TODO: FIXING
         * @param {number} id
         */
        useCollapsible: (id) => {
          const store = getStore();
          const numId = store.details.dataDetails.num;
          const newData = store.data[id];
          let selected = store.details.selected;

          //TODO - FIX : data reversed ? numId !== id ALWAYS - Change method
          setStore({
            details: {
              selected:
                store.data[0].num === 99
                  ? store.data.length - 1 - numId !== id
                    ? (selected = true)
                    : !selected
                  : store.data[0].num === 0
                  ? numId !== id
                    ? (selected = true)
                    : !selected
                  : null,
              dataDetails: newData,
            },
          });
          //TODO - FIX: Window.scrollTo doesn't always work.
          store.details.selected ? window.scrollTo(1000, 150) : null;
        },
      },
      /**
       * ! HOOK - FILTER
       * * AslanSN - 22-06-13
       * @param {string} family
       * @param {string} key
       */
      usefilterByCheckbox: (family, key) => {
        const actions = getActions(),
          store = getStore(),
          formatedFamily = actions.familiesConverter(family),
          checking = !store.checked;
        // checking = !checking;
        checking
          ? actions.filterData(formatedFamily, key)
          : actions.regenData();

        setStore({ checked: checking });
      },
    },
  };
};

export default getState;
