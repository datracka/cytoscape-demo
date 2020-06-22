const data = {
  networkData: {
    dataLinks: [
      {
        data: {
          source: "Node1",
          target: "Node2",
          betweenness: "1341.0",
          betweennessWeighted: "0.9849009498878546",
          id: "02a3aa5f-7b30-4a10-942f-eb2abc94ce30",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Node1",
          target: "Node3",
          betweenness: "22.0",
          betweennessWeighted: "0.3166666666666667",
          id: "02a3aa5f-7b30-4a10-942f-eb2abc94ce31",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
      {
        data: {
          source: "Node3",
          target: "Node4",
          betweenness: "1341.0",
          betweennessWeighted: "0.9849009498878546",
          id: "02a3aa5f-7b30-4a10-942f-eb2abc94ce33",
          typeLink: "mention",
          __typename: "Link",
        },
        __typename: "DataLink",
      },
    ],
    dataNodes: [
      {
        data: {
          id: "Node1",
          createdAt: "1592041557000",
          screenName: "Node1",
          degree: 0.36363636363636365,
          url: [],
          text: [],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "Node2",
          createdAt: "1592041464000",
          screenName: "Node2",
          degree: 0.36363636363636365,
          url: ["https://twitter.com/Pirhanovic/status/1271740191607263232"],
          text: [
            "@Melsscck @ahmetata231 @drfahrettinkoca @tcmeb @TC_icisleri @NASA @elonmusk @realDonaldTrump Şu hayatımı çalma artık yeter aq",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "Node3",
          createdAt: "1592041551000",
          screenName: "Node3",
          degree: 0.18181818181818182,
          url: [
            "https://twitter.com/Nuria2407/status/1271740557744898049",
            "https://twitter.com/Nuria2407/status/1271740405009338368",
            "https://twitter.com/Nuria2407/status/1271740393122607105",
          ],
          text: [
            "RT @AstroBehnken: Huge thank you to @NASA, @SpaceX, and America for making this possible! https://t.co/xp8XCpU2HD",
            "RT @NASA: LIVE NOW: New Horizons, in addition to being the first spacecraft to encounter Pluto, recently took images of the stars Proxima C…",
            "RT @NASA: This week on #SpacetoGround :\n\n⚡ @Space_Station research offers new insight to the role severe thunderstorms play in Earth's atmo…",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
      {
        data: {
          id: "Node4",
          createdAt: "1592041557000",
          screenName: "Node4",
          degree: 0.13636363636363635,
          url: [
            "https://twitter.com/TheRealDanielA4/status/1271740583174975489",
          ],
          text: [
            "RT @JimBridenstine: The cost-saving success of @Commercial_Crew is based on @NASA establishing high-level requirements and letting private…",
          ],
          __typename: "Node",
        },
        __typename: "DataNode",
      },
    ],
    numberNodes: 4,
    sinceRange: "Sat Jun 13 09:44:24 +0000 2020",
    untilRange: "Sat Jun 13 09:45:57 +0000 2020",
  },
};

export default data;
