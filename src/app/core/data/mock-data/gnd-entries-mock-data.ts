import { GndExternalSourceResponse } from "../../submission/models/gnd-entry.model";

export const gndResponseMock: GndExternalSourceResponse = {
    _embedded: {
        externalSourceEntries: [
            {
                id: "https://d-nb.info/gnd/4074335-4",
                display: "London",
                value: "London",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588b)1005809-6",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "(DE-588c)4074335-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "(DE-588)1073220583",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "(DE-588)1005809-6",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/4074335-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dcterms.spatial": [
                        {
                            value: "Point ( -000.125740 +051.508530 )",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.biographicalOrHistoricalInformation": [
                        {
                            value: "Hauptstadt des Vereinigten K��nigreichs von Gro��britannien und Nordirland, in Mittelsteinzeit besiedelt, 43 n. Chr. von R��mern gegr��ndet; das County of London war 1889-1965 Verwaltungsgrafschaft u. zeremonielle Grafschaft",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2023-12-08T17:26:17Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.depiction.thumbnail": [
                        {
                            value: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Montage_2016.png?width=270",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.deprecatedUri": [
                        {
                            value: "https://d-nb.info/gnd/1073220583",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "https://d-nb.info/gnd/1005809-6",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1005809-6",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "https://d-nb.info/gnd/1073220583",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "https://d-nb.info/gnd/4074335-4/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/137114155",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "http://viaf.org/viaf/236493943",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.wikidata": [
                        {
                            value: "http://www.wikidata.org/entity/Q23306",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "http://www.wikidata.org/entity/Q6669738",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "TerritorialCorporateBodyOrAdministrativeUnit",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "PlaceOrGeographicName",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Londen",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "Corporation of London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F4074335-4"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1202753957",
                display: "London",
                value: "London",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1202753957",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2020-04-16T18:03:50Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#ZZ",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Land unbekannt",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1202753957/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/962149296305780670003",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "Person",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "DifferentiatedPerson",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1202753957"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/30036718X",
                display: "London",
                value: "London",
                externalSource: "gnd",
               metadata: {
                    "dc.contributor.author": [
                        {
                            value: "Coates, Eric",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.other": [
                        {
                            value: "(DE-101c)30036718X",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/30036718X",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2016-11-04T16:16:19Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/186013461",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "Work",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "MusicalWork",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F30036718X"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1185509690",
                display: "London Conference (1945 : London)",
                value: "London Conference (1945 : London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1185509690",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London Conference (1945 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2019-05-07T10:12:57Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "XX.10.1945",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1185509690/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/1988155769085927880000",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1185509690"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1137385065",
                display: "EVA London (2017 : London)",
                value: "EVA London (2017 : London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1137385065",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "EVA London (2017 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2017-09-07T14:30:22Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "11.07.2017-13.07.2017",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1137385065/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/8617150172689000180000",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1137385065"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1085758753",
                display: "London Hospital (London)",
                value: "London Hospital (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1085758753",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2016-03-04T16:26:13Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#ZZ",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1085758753/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/741145857086222921920",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "CorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "London Hospital School",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressCountry": [
                        {
                            value: "Land unbekannt",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.legalName": [
                        {
                            value: "London Hospital (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1085758753"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/4610973-0",
                display: "Hafen London (London)",
                value: "Hafen London (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588c)4610973-0",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/4610973-0",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "Hafen London (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2021-08-23T14:45:30Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/4610973-0/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/238776188",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "PlaceOrGeographicName",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "BuildingOrMemorial",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F4610973-0"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/4255818-9",
                display: "London. Greater London Council",
                value: "London. Greater London Council",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588c)4255818-9",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "(DE-588b)16309595-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "(DE-588)16309595-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/4255818-9",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.biographicalOrHistoricalInformation": [
                        {
                            value: "1986 durch den Local Government Act 1985 aufgel��st und seine Befugniss den Londoner Bezirken und anderen Einheiten ��bertragen; im Jahr 2000 Gr��ndung einer neuen Verwaltungsbeh��rde: Greater London Authority (GLA)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2024-01-05T10:55:21Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.depiction.thumbnail": [
                        {
                            value: "https://commons.wikimedia.org/wiki/Special:FilePath/Heraldic%20Badge%20of%20Greater%20London%20Council.png?width=270",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.deprecatedUri": [
                        {
                            value: "https://d-nb.info/gnd/16309595-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/16309595-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "https://d-nb.info/gnd/4255818-9/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/305956977",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.wikidata": [
                        {
                            value: "http://www.wikidata.org/entity/Q1476542",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "OrganOfCorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "CorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Glc (Greater London Council)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "London County Council",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressCountry": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.legalName": [
                        {
                            value: "London. Greater London Council",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F4255818-9"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1164719602",
                display: "EVA London (2016 : London)",
                value: "EVA London (2016 : London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1164719602",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "EVA London (2016 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2018-08-17T09:19:25Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "12.07.2016-14.07.2016",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1164719602/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/3633153472520445360004",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Electronic Visualisation and the Arts London (2016 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1164719602"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1041411111",
                display: "London Economics (London)",
                value: "London Economics (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1041411111",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2013-09-06T13:16:24Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1041411111/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/305166576",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "CorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressCountry": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressLocality": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.legalName": [
                        {
                            value: "London Economics (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1041411111"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/10189134-9",
                display: "London Exhibition (1871 : London)",
                value: "London Exhibition (1871 : London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588b)10189134-9",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/10189134-9",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London Exhibition (1871 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2023-11-03T16:59:29Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "1871",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/10189134-9/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/160461628",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "London International Exhibition (1871 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "International Exhibition (1871 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F10189134-9"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1168015626",
                display: "Photo London (2018 : London)",
                value: "Photo London (2018 : London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1168015626",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "Photo London (2018 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2018-09-28T11:40:14Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "17.05.2018-20.05.2018",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.homepage": [
                        {
                            value: "https://photolondon.org/",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1168015626/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/995153834737064450006",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Photo London (4. : 2018 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "Photo London 2018",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1168015626"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1105584380",
                display: "Gr��ng��rtel London (London)",
                value: "Gr��ng��rtel London (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1105584380",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "Gr��ng��rtel London (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2016-07-07T05:35:24Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1105584380/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/51146825397407632119",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "PlaceOrGeographicName",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "NameOfSmallGeographicUnitLyingWithinAnotherGeographicUnit",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Metropolitan Green Belt (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "Green Belt (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1105584380"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/4223804-3",
                display: "London Bridge (London)",
                value: "London Bridge (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588c)4223804-3",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/4223804-3",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London Bridge (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2010-12-21T00:29:44Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.depiction.thumbnail": [
                        {
                            value: "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Bridge%20from%20South%20bank.jpg?width=270",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/4223804-3/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/315145763",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.wikidata": [
                        {
                            value: "http://www.wikidata.org/entity/Q130206",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "PlaceOrGeographicName",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "BuildingOrMemorial",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F4223804-3"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1307590705",
                display: "London. Greater London Authority",
                value: "London. Greater London Authority",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1307590705",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.biographicalOrHistoricalInformation": [
                        {
                            value: "umgangssprachlich unter dem Metonym ���City Hall��� bekannt; dezentrales regionales Verwaltungsorgan des Gro��raums London, England bestehend aus zwei politischen Zweigen: dem exekutiven B��rgermeisteramt und der 25-k��pfigen Londoner Versammlung (Kontrollorgan f��rs B��rgermeisteramt)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2024-01-05T10:30:08Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1307590705/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/236493943",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "OrganOfCorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "CorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Greater London Authority",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressCountry": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressLocality": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.legalName": [
                        {
                            value: "London. Greater London Authority",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1307590705"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/16311529-1",
                display: "London Group (London)",
                value: "London Group (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588b)16311529-1",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/16311529-1",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2011-08-25T19:27:49Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/16311529-1/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/208727152",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "CorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "London-Gruppe (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressCountry": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressLocality": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.legalName": [
                        {
                            value: "London Group (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F16311529-1"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1260814289",
                display: "London Book Fair (London)",
                value: "London Book Fair (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1260814289",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "London Book Fair (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2022-06-24T16:53:31Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "2008",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1260814289/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/172145424577986830567",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Book Fair (2008 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1260814289"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/1091822107",
                display: "EVA London (2015 : London)",
                value: "EVA London (2015 : London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/1091822107",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "EVA London (2015 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2018-08-17T09:23:26Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.dateOfConferenceOrEvent": [
                        {
                            value: "07.07.2015-09.07.2015",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.placeOfConferenceOrEvent": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/1091822107/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/3158145857098622921764",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "ConferenceOrEvent",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Electronic Visualisation and the Arts London (2015 : London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F1091822107"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/16311525-4",
                display: "London Arts Group (London)",
                value: "London Arts Group (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588b)16311525-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/16311525-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2011-08-25T19:27:49Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/16311525-4/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/291075306",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "CorporateBody",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Arts Group (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "London Graphic Arts Gallery (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressCountry": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.address.addressLocality": [
                        {
                            value: "London",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "organization.legalName": [
                        {
                            value: "London Arts Group (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F16311525-4"
                    }
                }
            },
            {
                id: "https://d-nb.info/gnd/4302320-4",
                display: "Tower of London (London)",
                value: "Tower of London (London)",
                externalSource: "gnd",
               metadata: {
                    "dc.identifier.other": [
                        {
                            value: "(DE-588c)4302320-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.identifier.uri": [
                        {
                            value: "https://d-nb.info/gnd/4302320-4",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.source": [
                        {
                            value: "gnd",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "dc.title": [
                        {
                            value: "Tower of London (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.biographicalOrHistoricalInformation": [
                        {
                            value: "Zitadelle ��stl. der Altstadt, ab 1077 erbaut; seit 1988 UNESCO-Weltkulturerbe",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.date.modified": [
                        {
                            value: "2021-09-17T17:29:44Z",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.depiction.thumbnail": [
                        {
                            value: "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20of%20London%20viewed%20from%20the%20River%20Thames.jpg?width=270",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.id": [
                        {
                            value: "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-GB",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.geographicAreaCode.label": [
                        {
                            value: "Gro��britannien",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.dnb": [
                        {
                            value: "https://d-nb.info/gnd/4302320-4/about",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.viaf": [
                        {
                            value: "http://viaf.org/viaf/128321639",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.sameAs.wikidata": [
                        {
                            value: "http://www.wikidata.org/entity/Q62378",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.type": [
                        {
                            value: "BuildingOrMemorial",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "PlaceOrGeographicName",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        },
                        {
                            value: "AuthorityResource",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ],
                    "gnd.variantName": [
                        {
                            value: "Tower (London)",
                            language: null,
                            authority: null,
                            confidence: -1,
                            place: -1
                        }
                    ]
                },
                type: "externalSourceEntry",
                _links: {
                    self: {
                        href: "http://localhost:8080/server/api/integration/externalsources/gnd/entryValues/https%3A%2F%2Fd-nb.info%2Fgnd%2F4302320-4"
                    }
                }
            }
        ]
    },
    _links: {
        self: {
          href: "http://localhost:8080/server/api/integration/externalsources/gnd/entries?query=London&hint=dc.subject&page=0&size=20"
        }
      },
      page: {
        size: 20,
        totalElements: 20,
        totalPages: 1,
        number: 0
      }
    };