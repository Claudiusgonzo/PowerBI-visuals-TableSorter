/*
 * Copyright (c) Microsoft
 * All rights reserved.
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/* tslint:disable */
const data = {
    "viewport": {
        "width": 3000,
        "height": 3000
    },
    "viewMode": 1,
    "type": 2,
    "operationKind": 0,
    "dataViews": [
        {
            "metadata": {
                "objects": {
                    "presentation": {
                        "values": true
                    }
                },
                "columns": [
                    {
                        "roles": {
                            "Rank": true
                        },
                        "type": {
                            "underlyingType": 259,
                            "category": <any>null,
                            "numeric": true
                        },
                        "displayName": "Discount",
                        "queryName": "Orders.Discount",
                        "expr": {
                            "_kind": 2,
                            "source": {
                                "_kind": 0,
                                "entity": "Orders",
                                "variable": "o"
                            },
                            "ref": "Discount"
                        }
                    }
                ]
            },
            "table": {
                "rows": [
                    [
                        0
                    ],
                    [
                        0.01
                    ],
                    [
                        0.03
                    ],
                    [
                        0.08
                    ],
                    [
                        0.09
                    ],
                    [
                        0.01
                    ],
                    [
                        0.02
                    ],
                    [
                        0.04
                    ],
                    [
                        0.05
                    ],
                    [
                        0.06
                    ]
                ],
                "columns": [
                    {
                        "roles": {
                            "Rank": true
                        },
                        "type": {
                            "underlyingType": 259,
                            "category": <any>null,
                            "numeric": true
                        },
                        "displayName": "Discount",
                        "queryName": "Orders.Discount",
                        "expr": {
                            "_kind": 2,
                            "source": {
                                "_kind": 0,
                                "entity": "Orders",
                                "variable": "o"
                            },
                            "ref": "Discount"
                        }
                    }
                ],
                "identity": [
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0,
                                    "valueEncoded": "0D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.01,
                                    "valueEncoded": "0.01D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.03,
                                    "valueEncoded": "0.03D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.08,
                                    "valueEncoded": "0.08D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.09,
                                    "valueEncoded": "0.09D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.01,
                                    "valueEncoded": "0.01D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.02,
                                    "valueEncoded": "0.02D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.04,
                                    "valueEncoded": "0.04D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.05,
                                    "valueEncoded": "0.05D"
                                }
                            }
                        },
                        "_key": {}
                    },
                    {
                        "_expr": {
                            "_kind": 8,
                            "right": {
                                "_kind": 13,
                                "comparison": 0,
                                "left": {
                                    "_kind": 2,
                                    "source": {
                                        "_kind": 0,
                                        "entity": "Orders"
                                    },
                                    "ref": "Discount"
                                },
                                "right": {
                                    "_kind": 17,
                                    "type": {
                                        "underlyingType": 259,
                                        "category": <any>null
                                    },
                                    "value": 0.06,
                                    "valueEncoded": "0.06D"
                                }
                            }
                        },
                        "_key": {}
                    }
                ],
                "identityFields": [
                    {
                        "_kind": 2,
                        "source": {
                            "_kind": 0,
                            "entity": "Orders"
                        },
                        "ref": "Discount"
                    }
                ]
            }
        }
    ]
};

import merge = require("lodash/merge");
import cloneDeep = require("lodash/cloneDeep");

/* tslint:enable */

export default function userJustLoadedARankColumn() {
    "use strict";
    const clonedOptions = <powerbi.VisualUpdateOptions><any>cloneDeep(data);

    // Make sure to disable animations
    merge(clonedOptions.dataViews[0].metadata, {
        objects: {
            presentation: {
                animation: false,
            },
        },
    });

    const rawColumns = ["Discount"];
    const rankColumns = [" 0", "≥ 0.01", "≥ 0.02", "≥ 0.03", "≥ 0.04", "≥ 0.05", "≥ 0.06", "≥ 0.08", "≥ 0.09"];
    const e: any = " - ";
    return {
        options: clonedOptions,
        expected: {
            rawColumns,
            rankColumns,
            columns: rawColumns.concat(rankColumns),
            rows: [
                ["0", "100", "100", "100", "100", "100", "100", "100", "100", "100"],
                ["0.01", e, "67", "75", "80", "83", "86", "88", "89", "90"],
                ["0.03", e, e, e, "60", "67", "71", "75", "78", "80"],
                ["0.08", e, e, e, e, e, e, e, "67", "70"],
                ["0.09", e, e, e, e, e, e, e, e, "60"],
                ["0.01", e, "33", "50", "40", "50", "57", "63", "56", "50"],
                ["0.02", e, e, "25", "20", "33", "43", "50", "44", "40"],
                ["0.04", e, e, e, e, "17", "29", "38", "33", "30"],
                ["0.05", e, e, e, e, e, "14", "25", "22", "20"],
                ["0.06", e, e, e, e, e, e, "13", "11", "10"],
            ],
        },
    };
};
