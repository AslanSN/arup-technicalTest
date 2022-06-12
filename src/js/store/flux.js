import { useState } from "react";
import data from "../../resources/data/mockData.json";
import { filters } from "./functions/filters";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: data,
      details: {
        selected: false,
        dataDetails: {},
      },
      families: [
        "Num.",
        "Discipline",
        "Reg. Date",
        "Sent to",
        "Subject",
        "Status",
        "Critical",
        "Message",
      ],
    },
    actions: {
      //! -- DATA MANIPULATORS -- //
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
        const reversedData = store.data.reverse();
        setStore({ data: reversedData });
      },
      //! FILTERS //
      /**
       * !Retriever
       * * AslanSN - 22-06-12
       * TODO: Review --- NOT WORKED
       * @returns
       */
      // familyRetriever: () => {
      //   const store = getStore();
      //   const item = store.data[0];
      //   const families = Object.keys(item);
      //   return families;
      // },
      // filtersTitles: () => {
      //   const actions = getActions();
      //   const keys = actions.familyRetriever();
      //   // const keys = Object.keys(rawFamilies);

      //   let families = keys.map((value) => value.trim().split(/(?=[A-Z])/));

      //   let composedFamily = families.filter((value) => value.length > 1);
      //   let regDate = composedFamily[0];
      //   let sentTo = composedFamily[1];
      //   const arrayStringFormating = (value) =>
      //     value[0].toUpperCase() + value.slice(1);

      //   let lonelies = families.filter((value) => value.length === 1);
      //   lonelies = lonelies.flat();
      //   lonelies = lonelies.map(arrayStringFormating);
      //   families = lonelies;

      //   regDate = regDate.map(arrayStringFormating);
      //   regDate = regDate.join(". ");
      //   sentTo = sentTo.map(arrayStringFormating);
      //   sentTo = sentTo.join(" ");
      //   families.splice(2, 0, regDate, sentTo);

      //   setStore({families: families})
      // },

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
              selected: numId !== id ? (selected = true) : !selected,
              dataDetails: newData,
            },
          });
          //TODO - FIX: Window.scrollTo doesn't always work.
          store.details.selected ? window.scrollTo(1000, 150) : null;
        },
      },
    },
  };
};

export default getState;
