Highcharts.chart('container', {

            chart: {
                type: 'bubble'
            },

            title: {
                text: 'Klíčoví hráči dostavby Dukovan - kdy by chtěli stavět a za čí peníze?',
                style: {
                    fontSize: "24px",
                    fontWeight: "bold",
                }
            },


            plotOptions: {
                bubble: {
                    minSize: 20,
                    maxSize: 120
                },

            },
            xAxis: {
                title: {
                    text: '<b>Za čí peníze by se měly Dukovany dostavět?</b>',
                    margin: 20,
                    style: {
                        fontSize: "16px"
                    }
                },
                min: 0,
                max: 20,
                tickInterval: 10,
                tickLength: 0,
                minorTickLength: 0,
                gridLineWidth: 1,
                showLastLabel: true,
                showFirstLabel: true,
                lineColor: '#ccc',
                lineWidth: 1,
                labels: {
                    style: {
                        fontSize: "14px"
                    }
                },
                categories: ['Za peníze ČEZu', 'ČEZ9', 'ČEZ8', 'ČEZ7', 'ČEZ6', 'ČEZ5', 'ČEZ4', 'ČEZ3', 'ČEZ2', 'ČEZ1', 'Neví/nevyjadřuje se', 'stát1', 'stát2', 'stát3', 'stát4', 'stát5', 'stát6', 'stát7', 'stát8', 'stát9', 'Za peníze státu']
            },
            yAxis: {
                title: {
                    text: '<b>Kdy by se mělo začít stavět?</b>',
                    rotation: 270,
                    margin: 10,
                    style: {
                        fontSize: "16px"
                    }
                },
                min: 0,
                max: 20,
                tickInterval: 10,
                tickLength: 3,
                minorTickLength: 0,
                lineColor: '#ccc',
                lineWidth: 1,
                labels: {
                    style: {
                        fontSize: "14px"
                    }
                },
                showLastLabel: true,
                showFirstLabel: true,
                categories: ['Nikdy', 'Ne9', 'Ne8', 'Ne7', 'Ne6', 'Ne5', 'Ne4', 'Ne3', 'Ne2', 'Ne1', 'Neví/<br>nevyjadřuje se', 'Ano1', 'Ano2', 'Ano3', 'Ano4', 'Ano5', 'Ano6', 'Ano7', 'Ano8', 'Ano9', 'Co nejdříve']
            },

            tooltip: {
                useHTML: true,
                pointFormat: '<h2>{point.jmeno}</h2><h3><i>{point.afiliace}</i></h3>' + '<p><b>Součet dopadu citací: </b><br>{point.z} zásahů</p>' + '<p><b>Názor na termín dostavby: </b><br>{point.nazorTermin}</p>' + '<p><b>Názor na způsob financování: </b><br>{point.nazorFinancovani}</p>',
            },

            series: [{
                data: [
                    {
                        x: 2,
                        y: 15,
                        z: 60154867,
                        jmeno: 'Andrej Babiš',
                        afiliace: 'Předseda vlády',
                        nazorTermin: 'Dukovany by se dostavět měly, ale na rozhodnutí nespěchá. Průběžně obhajuje i možnost prodloužení životnosti současných bloků.',
                        nazorFinancovani: 'Vzhledem ke svým ziskům by měl dostavbu financovat ČEZ, připouští ale, že stát by měl poskytnout finanční záruku jako druhý v pořadí.',
                        dataLabels: {
                            enabled: true,
                            format: 'Andrej Babiš'
                        }
                    },
                    {
                        x: 2,
                        y: 17,
                        z: 30911477,
                        jmeno: 'Marta Nováková',
                        afiliace: 'Ministryně průmyslu a obchodu',
                        nazorTermin: 'Dukovany by se dostavět měly, ale na rozhodnutí nespěchá. Průběžně obhajuje i možnost prodloužení životnosti současných bloků, v porovnání s Andrejem Babišem však s menší razancí.',
                        nazorFinancovani: 'Vzhledem ke svým ziskům by měl dostavbu financovat ČEZ, připouští ale, že stát by měl poskytnout finanční záruku jako druhý v pořadí.',
                        dataLabels: {
                            enabled: true,
                            format: 'Marta Nováková'
                        }
                    },
                    {
                        x: 1,
                        y: 18,
                        z: 11911162,
                        jmeno: 'Tomáš Hüner',
                        afiliace: 'Ministr průmyslu a obchodu 12/2017-6/2018',
                        nazorTermin: 'Dukovany by se dostavět měly co nejdříve, rozhodnutí by mělo padnout do konce roku 2018.',
                        nazorFinancovani: 'Dostavbu by měl plně financovat ČEZ bez garance státu.',
                        dataLabels: {
                            enabled: true,
                            format: 'Tomáš Hüner'
                        }
                    },
                    {
                        x: 10,
                        y: 17.5,
                        z: 5146018,
                        jmeno: 'Jan Hamáček',
                        afiliace: 'Ministr vnitra',
                        nazorTermin: 'Dostavba by měla být zahájena co nejdříve',
                        nazorFinancovani: 'K tématu se nevyjadřuje. O způsobu dostavby by podle něj měli rozhodnout odborníci.',
                        dataLabels: {
                            enabled: true,
                            format: 'Jan Hamáček'
                        }
                    }
                ],
                name: 'Vládní představitelé',
                dataLabels: {
                    allowOverlap: true,
                    style: {
                        fontSize: 14,
                        fontWeight: 'normal',
                    }
                },
                color: 'rgba(23,40,130,10)'
            }, {
                data: [
                    {
                        x: 18.7,
                        y: 17,
                        z: 28339647,
                        jmeno: 'Daniel Beneš',
                        afiliace: 'Generální ředitel ČEZ',
                        nazorTermin: 'S dostavbou souhlasí, pro ČEZ by byla příležitostí k rozvoji.',
                        nazorFinancovani: 'Preferuje dostavbu financovanou státem, aby ji nemusel ČEZ financovat ze svého zisku a řešit komplikace s minoritními akcionáři, kteří se bojí o hodnotu svých investic.',
                        dataLabels: {
                            enabled: true,
                            format: 'Daniel Beneš'
                        }
                    },
                    {
                        x: 19,
                        y: 2,
                        z: 12437080,
                        jmeno: 'Michal Šnobr',
                        afiliace: 'Minoritní akcionář ČEZ, analytik J&T',
                        nazorTermin: 'S dostavbou nesouhlasí, považuje ji za nerentabilní.',
                        nazorFinancovani: 'Pokud by dostavbu financoval ČEZ, ohrozil by zájmy minoritních akcionářů. Pokud by se o dostavbě rozhodlo, ČEZ by se měl transformovat a stavbu zajistit dceřinou společností plně vlastněnou státem.',
                        dataLabels: {
                            enabled: true,
                            format: 'Michal Šnobr'
                        }
                    },
                    {
                        x: 10,
                        y: 15,
                        z: 1281509,
                        jmeno: 'Miloš Štěpanovský',
                        afiliace: 'Ředitel jaderné elektrárny Dukovany',
                        nazorTermin: 'Dostavba by se měla uskutečnit, zároveň ale považuje za reálné prodloužení životnosti stávajících bloků po roce 2035.Dostavba by měla být uskutečněna, zároveň ale považuje za reálné prodloužení životnosti stávajících bloků po roce 2035',
                        nazorFinancovani: 'K tématu se nevyjadřuje.',
                        dataLabels: {
                            enabled: true,
                            format: 'Miloš Štěpanovský'
                        }
                    },
                    {
                        x: 17,
                        y: 15,
                        z: 710012,
                        jmeno: 'Bohdan Zronek',
                        afiliace: 'Ředitel divize jaderné energetiky ČEZ',
                        nazorTermin: 'Dostavba by měla být uskutečněna, zároveň ale považuje za reálné prodloužení životnosti stávajících bloků po roce 2035.',
                        nazorFinancovani: 'Financování není v možnostech ČEZu, měl by jej spíše zajistit stát.',
                        dataLabels: {
                            enabled: true,
                            format: 'Bohdan Zronek'
                        }
                    },
                ],
                color: 'rgba(238,128,40,10)',
                dataLabels: {
                    allowOverlap: true,
                    style: {
                        fontSize: 14,
                        fontWeight: 'normal',
                    }
                },
                name: 'ČEZ'
            }, {
                data: [{
                    x: 5,
                    y: 19,
                    z: 14520028,
                    jmeno: 'Miloš Zeman',
                    afiliace: 'Prezident ČR',
                    nazorTermin: 'Uhelná a jaderná energetika by měly být pro Česko prioritou. Preferuje co nejrychlejší kladné rozhodnutí o dostavbě.',
                    nazorFinancovani: 'Dostavbu by měl financovat ČEZ, nesouhlasí s transformací společnosti, aby bylo riziko přeneseno na stát. Zároveň ale připouští, že by se tak vyřešily problémy s minoritními akcionáři. Průběžně ale také prosazuje variantu, aby dostavbu provedl Rosatom a Česko si na ni půjčilo od Ruska.',
                    dataLabels: {
                        enabled: true,
                        format: 'Miloš Zeman'
                    }
                }
                ],
                color: 'rgba(230,52,52,10)',
                dataLabels: {
                    allowOverlap: true,
                    style: {
                        fontSize: 14,
                        fontWeight: 'normal',
                    }
                },
                name: 'Miloš Zeman'
            }, {
                data: [{
                    x: 14,
                    y: 19,
                    z: 11819766,
                    jmeno: 'Dana Drábová',
                    afiliace: 'Předsedkyně Státního úřadu pro jadernou bezpečnost',
                    nazorTermin: 'O dostavbě by se mělo rozhodnout co nejdříve, možnost prodloužení životnosti stávajících bloků je nejistá.',
                    nazorFinancovani: 'K tématu se příliš nevyjadřuje, ale dostavba v rukou státu by podle ní byla ekonomicky méně riziková než financování polostátním ČEZem.',
                    dataLabels: {
                        enabled: true,
                        format: 'Dana Drábová'
                    }
                }, {
                    x: 18,
                    y: 19,
                    z: 5643377,
                    jmeno: 'Ján Štuller',
                    afiliace: 'Vládní zmocněnec pro jadernou energetiku (do 1/2019), poradce Andreje Babiše pro energetiku (od 11/2018)',
                    nazorTermin: 'Dostavba by měla být zahájena co nejdříve.',
                    nazorFinancovani: 'Stavbu by měl financovat spíše stát.',
                    dataLabels: {
                        enabled: true,
                        format: 'Ján Štuller'
                    }
                }, {
                    x: 16.5,
                    y: 19.5,
                    z: 171470,
                    jmeno: 'Vladimír Wagner',
                    afiliace: 'Odborný pracovník Ústavu jaderné fyziky AV ČR',
                    nazorTermin: 'Dostavba by měla být zahájena ihned, nelze spoléhat na prodlužování životnosti a jiné zdroje energie.',
                    nazorFinancovani: 'Dostavbu by měl financovat stát, dosáhne na mnohem lepší podmínky úvěru.',
                    dataLabels: {
                        enabled: true,
                        format: 'Vladimír Wagner'
                    }
                },
                ],
                name: 'Odbornící na jádro',
                dataLabels: {
                    allowOverlap: true,
                    style: {
                        fontSize: 14,
                        fontWeight: 'normal',
                    }
                },
                color: 'rgba(255,205,0,10)'
            }, {
                data: [{
                    x: 7,
                    y: 0.8,
                    z: 5103826,
                    jmeno: 'Edvard Sequens',
                    afiliace: 'Předseda Calla - Sdružení pro záchranu prostředí',
                    nazorTermin: 'Další bloky jaderných elektráren by se stavět neměly. Argumentuje zejména bezpečnostními riziky, nerentabilitou výstavby a potřebou zaměřit se na rozvoj obnovitelných zdrojů.',
                    nazorFinancovani: 'S ohledem na nízkou ekonomickou návratnost by dostavbu neměl financovat stát.',
                    dataLabels: {
                        enabled: true,
                        format: 'Edvard Sequens'
                    }
                }, {
                    x: 10,
                    y: 0.5,
                    z: 1298610,
                    jmeno: 'Štěpán Chalupa',
                    afiliace: 'předseda Komory obnovitelných zdrojů energie',
                    nazorTermin: 'Jaderné elektrárny by se neměly rozšiřovat, obnovitelné zdroje jsou rentabilnější.',
                    nazorFinancovani: 'K tématu se nevyjadřuje.',
                    dataLabels: {
                        enabled: true,
                        format: 'Štěpán Chalupa'
                    }
                }, {
                    x: 8.5,
                    y: 1.2,
                    z: 368160,
                    jmeno: 'Karel Polanecký',
                    afiliace: 'Energetický expert Hnutí DUHA',
                    nazorTermin: 'Dostavbu nepodporuje kvůli vysokému riziku zdržení nebo nedokončení výstavby. Zdůrazňuje také ekonomickou nevýhodnost v porovnání s obnovitelnými zdroji.',
                    nazorFinancovani: 'S ohledem na nízkou ekonomickou návratnost by dostavbu neměl financovat stát.',
                    dataLabels: {
                        enabled: true,
                        format: 'Karel Polanecký'
                    }
                },
                ],
                name: 'Ekologové',
                dataLabels: {
                    allowOverlap: true,
                    style: {
                        fontSize: 14,
                        fontWeight: 'normal',
                    }
                },
                color: 'rgba(137,185,23,10)'
            }, {
                data: [{
                    x: 19.3,
                    y: 12,
                    z: 2919130,
                    jmeno: 'Jiří Gavor',
                    afiliace: 'Analytik ENA - Energetické poradenství a analýzy',
                    nazorTermin: 'S rozhodnutím není třeba spěchat, je třeba zvážit i variantu prodloužení životnosti stávajících bloků.',
                    nazorFinancovani: 'Ekonomická rizika spojená s dostavbou není možné přenášet na komerční subjekty, ČEZ by se měl transformovat a dceřinou společnost zaměřenou na energetiku plně převzít stát.',
                    dataLabels: {
                        enabled: true,
                        format: 'Jiří Gavor'
                    }
                }, {
                    x: 10,
                    y: 19.3,
                    z: 2795649,
                    jmeno: 'Vítězslav Jonáš',
                    afiliace: 'Předseda spolku Energetické Třebíčsko',
                    nazorTermin: 'Dostavbu zahájit co nejdříve, pomůže ekonomickému rozvoji Třebíčska.',
                    nazorFinancovani: 'K tématu se nevyjadřuje.',
                    dataLabels: {
                        enabled: true,
                        format: 'Vítězslav Jonáš'
                    }
                }, {
                    x: 18,
                    y: 18,
                    z: 2359130,
                    jmeno: 'Vladimír Dlouhý',
                    afiliace: 'Prezident Hospodářské komory',
                    nazorTermin: 'Dostavba by měla být zahájena co nejdříve, je v zájmu průmyslového rozvoje Česka.',
                    nazorFinancovani: 'Dostavbu by měl financovat stát, jelikož takto velká investice není v možnostech ČEZu.',
                    dataLabels: {
                        enabled: true,
                        format: 'Vladimír Dlouhý'
                    }
                }, {
                    x: 10,
                    y: 18.2,
                    z: 1402268,
                    jmeno: 'Jaroslav Hanák',
                    afiliace: 'Prezident Svazu průmyslu a dopravy',
                    nazorTermin: 'Dostavba by měla být zahájena co nejdříve, je v zájmu podpory zaměstnanosti v Česku.',
                    nazorFinancovani: 'Nevyjadřuje se. Zásadní je, aby se na dostavbě co nejvíce podílely České subjekty.',
                    dataLabels: {
                        enabled: true,
                        format: 'Jaroslav Hanák'
                    }
                }, {
                    x: 19.5,
                    y: 10,
                    z: 737403,
                    jmeno: 'Jan Raška',
                    afiliace: 'Analytik FIO banky',
                    nazorTermin: 'K tématu se nevyjadřuje.',
                    nazorFinancovani: 'Dostavbu by měl financovat stát, aby byla snížena finanční rizika pro akcionáře ČEZu.',
                    dataLabels: {
                        enabled: true,
                        format: 'Jan Raška'
                    }
                },
                ],
                name: 'Ekonomie a hospodářství',
                dataLabels: {
                    allowOverlap: true,
                    style: {
                        fontSize: 14,
                        fontWeight: 'normal',
                    }
                },
                color: 'rgba(95, 35, 130, 10)'
            }
            ]
        });
