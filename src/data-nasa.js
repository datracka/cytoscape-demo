/* 


bw: 

dict_values([5.25, 19.0, 5.25, 5.25, 4.916666666666666, 4.916666666666666, 32.0, 17.0, 19.000000000000004, 56.0, 17.0, 18.666666666666668, 32.0, 18.666666666666668, 17.0, 5.25, 4.916666666666666, 4.916666666666666, 17.0, 17.0, 17.0, 17.0, 1.0, 17.0])

max bw 56.0

bw wieghts: {('TalkofTville', 'virgingalactic'): 0.09375, ('TalkofTville', 'NASA'): 0.3392857142857143, ('TalkofTville', 'Space_Station'): 0.09375, ('virgingalactic', 'StarFleetTours'): 0.09375, ('virgingalactic', 'etphonegemini'): 0.08779761904761904, ('virgingalactic', 'spaceportla'): 0.08779761904761904, ('NASA', 'SaintXaviero'): 0.5714285714285714, ('NASA', '07711Eskimoe'): 0.30357142857142855, ('NASA', 'StarFleetTours'): 0.33928571428571436, ('NASA', 'Tsuru42K'): 1.0, ('NASA', 'Heisenberg_Pe'): 0.30357142857142855, ('NASA', 'etphonegemini'): 0.33333333333333337, ('NASA', 'AliciaTStorm'): 0.5714285714285714, ('NASA', 'spaceportla'): 0.33333333333333337, ('NASA', 'daric_erminote'): 0.30357142857142855, ('Space_Station', 'StarFleetTours'): 0.09375, ('Space_Station', 'etphonegemini'): 0.08779761904761904, ('Space_Station', 'spaceportla'): 0.08779761904761904, ('SaintXaviero', 'dysenterycharly'): 0.30357142857142855, ('Tsuru42K', 'ESA_EO'): 0.30357142857142855, ('Tsuru42K', 'esa'): 0.30357142857142855, ('Tsuru42K', 'JAXA_en'): 0.30357142857142855, ('etphonegemini', 'spaceportla'): 0.017857142857142856, ('AliciaTStorm', 'NASA_Marshall'): 0.30357142857142855}


*/

const data = {
  networkData: {
    dataNodes: [
      {
        data: {
          id: "NASA",
          createdAt: "1592840387000",
          screenName: "NASA",
          degree: 0.5882352941176471,
          type: "mention",
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "virgingalactic",
          createdAt: "1592824282000",
          screenName: "virgingalactic",
          degree: 0.23529411764705882,
          type: "retweet",
          url: [
            "https://twitter.com/virgingalactic/status/1275023567831404545",
          ],
          text: [
            "A thread: today we\u2019re announcing a Space Act Agreement with @NASA for Private Orbital Spaceflight to the @Space_Station. Under this agreement, we will develop a new private orbital astronaut readiness program. https://t.co/23W2OLv8Nb https://t.co/MmdDsRj9nQ",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "Space_Station",
          createdAt: "1592840387000",
          screenName: "Space_Station",
          degree: 0.23529411764705882,
          type: "mention",
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "Tsuru42K",
          createdAt: "1592840353000",
          screenName: "Tsuru42K",
          degree: 0.23529411764705882,
          type: "source",
          url: ["https://twitter.com/Tsuru42K/status/1275090978500562944"],
          text: [
            "RT @ESA_EO: On Thursday join experts from @esa, @nasa &amp; @JAXA_en for a live presentation of a new tri-agency #covid19 #EO dashboard. \n\ud83d\udcf9Foll\u2026",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "etphonegemini",
          createdAt: "1592840341000",
          screenName: "etphonegemini",
          degree: 0.23529411764705882,
          type: "source",
          url: ["https://twitter.com/etphonegemini/status/1275090928244453380"],
          text: [
            "RT @spaceportla: Congratulations to @virgingalactic! \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f Exciting news and partenership with @NASA to fly \ud83d\udc68\u200d\ud83d\ude80\ud83d\udc69\u200d\ud83d\ude80\ud83d\udc68\u200d\ud83d\ude80\ud83d\udc69\u200d\ud83d\ude80 to @Space_Station! \ud83e\udd29\u2026",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "spaceportla",
          createdAt: "1592840321000",
          screenName: "spaceportla",
          degree: 0.23529411764705882,
          type: "retweet",
          url: ["https://twitter.com/spaceportla/status/1275090843339067392"],
          text: [
            "Congratulations to @virgingalactic! \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f Exciting news and partenership with @NASA to fly \ud83d\udc68\u200d\ud83d\ude80\ud83d\udc69\u200d\ud83d\ude80\ud83d\udc68\u200d\ud83d\ude80\ud83d\udc69\u200d\ud83d\ude80 to @Space_Station! \ud83e\udd29\ud83c\udf1f\n#NewSpace #astronauts \n#SpaceportLAatHome \ud83d\ude80 https://t.co/FfEFxZuxKq",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "TalkofTville",
          createdAt: "1592840387000",
          screenName: "TalkofTville",
          degree: 0.1764705882352941,
          type: "source",
          url: ["https://twitter.com/TalkofTville/status/1275091118867337217"],
          text: [
            "RT @virgingalactic: A thread: today we\u2019re announcing a Space Act Agreement with @NASA for Private Orbital Spaceflight to the @Space_Station\u2026",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "StarFleetTours",
          createdAt: "1592840362000",
          screenName: "StarFleetTours",
          degree: 0.1764705882352941,
          type: "source",
          url: [
            "https://twitter.com/StarFleetTours/status/1275091013892177928",
          ],
          text: [
            "RT @virgingalactic: A thread: today we\u2019re announcing a Space Act Agreement with @NASA for Private Orbital Spaceflight to the @Space_Station\u2026",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "SaintXaviero",
          createdAt: "1592840387000",
          screenName: "SaintXaviero",
          degree: 0.11764705882352941,
          type: "source",
          url: ["https://twitter.com/SaintXaviero/status/1275091117457932289"],
          text: [
            "@dysenterycharly Lol que es el mismo tiempo que le toma \u201crenderizar\u201d a la @NASA",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "AliciaTStorm",
          createdAt: "1592840334000",
          screenName: "AliciaTStorm",
          degree: 0.11764705882352941,
          type: "source",
          url: ["https://twitter.com/AliciaTStorm/status/1275090897143844864"],
          text: [
            "RT @NASA: In the name of science, @NASA_Marshall engineers will try to break a structural test article of a liquid oxygen tank\u2014on purpose.\u2026",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "dysenterycharly",
          createdAt: "1592840387000",
          screenName: "dysenterycharly",
          degree: 0.058823529411764705,
          type: "mention",
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "07711Eskimoe",
          createdAt: "1592840367000",
          screenName: "07711Eskimoe",
          degree: 0.058823529411764705,
          type: "source",
          url: ["https://twitter.com/07711Eskimoe/status/1275091036478607361"],
          text: [
            "Astronauts Chris Cassidy and Bob Behnken Work on U.S. Spacesuits https://t.co/qUeK374ehE via @NASA https://t.co/LVBiY4ykV8",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "ESA_EO",
          createdAt: "1592834452000",
          screenName: "ESA_EO",
          degree: 0.058823529411764705,
          type: "retweet",
          url: ["https://twitter.com/ESA_EO/status/1275066225891000320"],
          text: [
            "On Thursday join experts from @esa, @nasa &amp; @JAXA_en for a live presentation of a new tri-agency #covid19 #EO dashboard. \n\ud83d\udcf9Follow the live webstream: https://t.co/4FgNeUB0QP\n\u2753Ask your questions to the speakers by using the hashtag #askESA on Twitter\n\u2139\ufe0fhttps://t.co/b7FNUspf77 https://t.co/7ORAexPQIc",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "esa",
          createdAt: "1592840353000",
          screenName: "esa",
          degree: 0.058823529411764705,
          type: "mention",
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "JAXA_en",
          createdAt: "1592840353000",
          screenName: "JAXA_en",
          degree: 0.058823529411764705,
          type: "mention",
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "Heisenberg_Pe",
          createdAt: "1592840344000",
          screenName: "Heisenberg_Pe",
          degree: 0.058823529411764705,
          type: "source",
          url: ["https://twitter.com/Heisenberg_Pe/status/1275090940122869765"],
          text: [
            "Al infinito y mas all\u00e1... Astronauts Chris Cassidy and Bob Behnken Work on U.S. Spacesuits https://t.co/95bM3Yu8GB via @NASA https://t.co/8kNMOzX7H8",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "NASA_Marshall",
          createdAt: "1592840334000",
          screenName: "NASA_Marshall",
          degree: 0.058823529411764705,
          type: "mention",
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "daric_erminote",
          createdAt: "1592840318000",
          screenName: "daric_erminote",
          degree: 0.058823529411764705,
          type: "source",
          url: [
            "https://twitter.com/daric_erminote/status/1275090830051737600",
          ],
          text: [
            "@NASA renewable energy generating with sound cells is the project..",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
    ],
    dataLinks: [
      {
        data: {
          source: "TalkofTville",
          target: "virgingalactic",
          betweenness: "5.25",
          betweennessWeighted: "0.09375",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "TalkofTville",
          target: "NASA",
          betweenness: "19.0",
          betweennessWeighted: "0.3392857142857143",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "TalkofTville",
          target: "Space_Station",
          betweenness: "5.25",
          betweennessWeighted: "0.09375",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "virgingalactic",
          target: "StarFleetTours",
          betweenness: "5.25",
          betweennessWeighted: "0.09375",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "virgingalactic",
          target: "etphonegemini",
          betweenness: "4.916666666666666",
          betweennessWeighted: "0.08779761904761904",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "virgingalactic",
          target: "spaceportla",
          betweenness: "4.916666666666666",
          betweennessWeighted: "0.08779761904761904",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "SaintXaviero",
          betweenness: "32.0",
          betweennessWeighted: "0.5714285714285714",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "07711Eskimoe",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "StarFleetTours",
          betweenness: "19.000000000000004",
          betweennessWeighted: "0.33928571428571436",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "Tsuru42K",
          betweenness: "56.0",
          betweennessWeighted: "1.0",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "Heisenberg_Pe",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "etphonegemini",
          betweenness: "18.666666666666668",
          betweennessWeighted: "0.33333333333333337",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "AliciaTStorm",
          betweenness: "32.0",
          betweennessWeighted: "0.5714285714285714",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "spaceportla",
          betweenness: "18.666666666666668",
          betweennessWeighted: "0.33333333333333337",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "NASA",
          target: "daric_erminote",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Space_Station",
          target: "StarFleetTours",
          betweenness: "5.25",
          betweennessWeighted: "0.09375",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Space_Station",
          target: "etphonegemini",
          betweenness: "4.916666666666666",
          betweennessWeighted: "0.08779761904761904",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Space_Station",
          target: "spaceportla",
          betweenness: "4.916666666666666",
          betweennessWeighted: "0.08779761904761904",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "SaintXaviero",
          target: "dysenterycharly",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Tsuru42K",
          target: "ESA_EO",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Tsuru42K",
          target: "esa",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Tsuru42K",
          target: "JAXA_en",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "etphonegemini",
          target: "spaceportla",
          betweenness: "1.0",
          betweennessWeighted: "0.017857142857142856",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "AliciaTStorm",
          target: "NASA_Marshall",
          betweenness: "17.0",
          betweennessWeighted: "0.30357142857142855",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
    ],
    sinceRange: "Mon Jun 22 15:38:38 +0000 2020",
    untilRange: "Mon Jun 22 15:39:47 +0000 2020",
    numberNodes: "18",
    __typename: "Network",
  },
};

export default data;
