const db = [
  {
    drug: "Exelderm",
    company: "Ranbaxy Laboratories Inc.",
    price: 1882.13,
    rating: 3,
    review:
      "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
    image: "http://dummyimage.com/250x250.bmp/cc0000/ffffff"
  },
  {
    drug: "ZIT ERASER",
    company: "J. A. Cosmetics U.S. INC",
    price: 146.25,
    rating: 2,
    review:
      "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
    image: "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
  },
  {
    drug: "Genitrex",
    company: "Ionx Holdings d/b/a HelloLife LLC",
    price: 1921.47,
    rating: 0,
    review:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  },
  {
    drug: "Azithromycin",
    company: "Cardinal Health",
    price: 1443.7,
    rating: 4,
    review:
      "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
    image: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
  },
  {
    drug: "Alert",
    company: "DOLGENCORP, LLC",
    price: 248.81,
    rating: 1,
    review:
      "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
    image: "http://dummyimage.com/250x250.bmp/ff4444/ffffff"
  },
  {
    drug: "Clozapine",
    company: "Mylan Pharmaceuticals Inc.",
    price: 1972.46,
    rating: 5,
    review:
      "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    image: "http://dummyimage.com/250x250.png/dddddd/000000"
  },
  {
    drug: "FlexGen",
    company: "Lifetech Resources, LLC",
    price: 422.95,
    rating: 5,
    review:
      "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
    image: "http://dummyimage.com/250x250.png/dddddd/000000"
  },
  {
    drug: "Oxygen",
    company: "Memorial Home Services of Central Illinois, Inc",
    price: 577.69,
    rating: 5,
    review:
      "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  },
  {
    drug: "Silica Skin Support",
    company: "Uriel Pharmacy Inc",
    price: 410.02,
    rating: 2,
    review:
      "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
    image: "http://dummyimage.com/250x250.bmp/cc0000/ffffff"
  },
  {
    drug: "Good Neighbor Pharmacy Acid Control",
    company: "Amerisource Bergen",
    price: 1324.36,
    rating: 4,
    review:
      "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
    image: "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
  },
  {
    drug: "Antacid",
    company: "Meijer Distribution Inc",
    price: 1490.98,
    rating: 0,
    review:
      "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
    image: "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
  },
  {
    drug: "Fusion Beauty ColorCeuticals Acne Control Primer",
    company: "Fusion Brands",
    price: 523.38,
    rating: 2,
    review:
      "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
    image: "http://dummyimage.com/250x250.bmp/cc0000/ffffff"
  },
  {
    drug: "Irbesartan",
    company: "Lupin Pharmaceuticals, Inc.",
    price: 196.72,
    rating: 2,
    review:
      "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    image: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
  },
  {
    drug: "Enalapril Maleate",
    company: "Golden State Medical Supply, Inc.",
    price: 1194.52,
    rating: 2,
    review:
      "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
    image: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
  },
  {
    drug: "PCOS",
    company: "Home Sweet Homeopathics",
    price: 1976.95,
    rating: 1,
    review:
      "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "Sodium Lactate",
    company: "Hospira, Inc.",
    price: 479.31,
    rating: 2,
    review:
      "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci",
    image: "http://dummyimage.com/250x250.bmp/cc0000/ffffff"
  },
  {
    drug: "ORAL-DENT",
    company: "International Cosmetic Limited",
    price: 148.71,
    rating: 5,
    review:
      "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  },
  {
    drug: "NHS HIP PAIN",
    company: "Natural Health Supply",
    price: 898.62,
    rating: 1,
    review:
      "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
    image: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
  },
  {
    drug: "Voltaren",
    company: "Keltman Pharmaceuticals Inc.",
    price: 1681.77,
    rating: 5,
    review:
      "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
    image: "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
  },
  {
    drug: "YES TO GRAPEFRUIT CC CREAM - LIGHT",
    company: "Autumn Harp, Inc",
    price: 1463.65,
    rating: 4,
    review:
      "luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
    image: "http://dummyimage.com/250x250.bmp/ff4444/ffffff"
  },
  {
    drug: "CLE DE PEAU BEAUTE CR COMPACT FOUNDATION",
    company: "SHISEIDO CO., LTD.",
    price: 11.96,
    rating: 1,
    review:
      "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
    image: "http://dummyimage.com/250x250.bmp/cc0000/ffffff"
  },
  {
    drug: "Ceftriaxone",
    company: "Cephazone Pharma LLC",
    price: 1842.63,
    rating: 2,
    review:
      "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "gent-L-tip",
    company: "Chester Packaging",
    price: 541.83,
    rating: 3,
    review:
      "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "False Ragweed",
    company: "Nelco Laboratories, Inc.",
    price: 1647.49,
    rating: 4,
    review:
      "ut erat id mauris vulputate elementum nullam varius nulla facilisi",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff"
  },
  {
    drug: "Carbamazepine",
    company: "Taro Pharmaceuticals U.S.A., Inc.",
    price: 1911.18,
    rating: 2,
    review:
      "consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
    image: "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
  },
  {
    drug: "LubriFresh P.M.",
    company: "Rebel Distributors Corp",
    price: 554.28,
    rating: 0,
    review:
      "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff"
  },
  {
    drug: "SHISEIDO RADIANT LIFTING FOUNDATION",
    company: "SHISEIDO AMERICA INC.",
    price: 1321.93,
    rating: 2,
    review:
      "ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "YES TO TOMATOES DAILY PORE SCRUB",
    company: "Autumn Harp, Inc.",
    price: 129.67,
    rating: 2,
    review:
      "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
    image: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
  },
  {
    drug: "Tri-Sprintec",
    company: "Barr Laboratories Inc.",
    price: 1274.63,
    rating: 5,
    review:
      "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
    image: "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
  },
  {
    drug: "BUTALBITAL AND ACETAMINOPHEN",
    company: "STAT Rx USA LLC",
    price: 1250.98,
    rating: 4,
    review:
      "tempus semper est quam pharetra magna ac consequat metus sapien ut",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff"
  },
  {
    drug: "Nicardipine Hydrochloride",
    company: "Carilion Materials Management",
    price: 859.96,
    rating: 3,
    review: "praesent id massa id nisl venenatis lacinia aenean sit amet justo",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff"
  },
  {
    drug: "Head and Shoulders 2in1",
    company: "Procter & Gamble Manufacturing Co.",
    price: 1368.25,
    rating: 5,
    review:
      "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
    image: "http://dummyimage.com/250x250.bmp/cc0000/ffffff"
  },
  {
    drug: "HZ Formula",
    company: "Apotheca Company",
    price: 243.7,
    rating: 2,
    review:
      "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    image: "http://dummyimage.com/250x250.bmp/dddddd/000000"
  },
  {
    drug: "BENALDRYL",
    company: "AJES PHARMACEUTICALS,LLC",
    price: 1073.3,
    rating: 2,
    review:
      "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    image: "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
  },
  {
    drug: "Clear Cell Medicated Acne Masque",
    company: "Allure Labs, Inc.",
    price: 924.04,
    rating: 2,
    review:
      "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
    image: "http://dummyimage.com/250x250.png/dddddd/000000"
  },
  {
    drug: "Hydrocortisone",
    company: "Golden State Medical Supply, Inc.",
    price: 93.32,
    rating: 3,
    review:
      "vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
    image: "http://dummyimage.com/250x250.bmp/dddddd/000000"
  },
  {
    drug: "IVA ANNUA VAR ANNUA POLLEN",
    company: "ALK-Abello, Inc.",
    price: 1473.07,
    rating: 2,
    review:
      "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "Effer-K",
    company: "Nomax Inc.",
    price: 458.77,
    rating: 2,
    review:
      "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
    image: "http://dummyimage.com/250x250.bmp/ff4444/ffffff"
  },
  {
    drug: "Ibuprofen",
    company: "Contract Pharmacy Services-PA",
    price: 1250.59,
    rating: 5,
    review:
      "ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
    image: "http://dummyimage.com/250x250.png/cc0000/ffffff"
  },
  {
    drug: "CLE DE PEAU BEAUTE PW FOUNDATION s",
    company: "SHISEIDO CO., LTD.",
    price: 946.9,
    rating: 5,
    review:
      "luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
    image: "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
  },
  {
    drug: "Sodium Chloride",
    company: "Sanofi Pasteur Inc.",
    price: 1265.83,
    rating: 3,
    review:
      "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "Zicam Naturals Cough Suppressant",
    company: "Matrixx Initiatives, Inc.",
    price: 1982.88,
    rating: 2,
    review:
      "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
    image: "http://dummyimage.com/250x250.bmp/dddddd/000000"
  },
  {
    drug: "ANTI AGE FACE",
    company: "Guna spa",
    price: 122.9,
    rating: 4,
    review:
      "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
    image: "http://dummyimage.com/250x250.png/dddddd/000000"
  },
  {
    drug: "good sense pain relief",
    company: "L Perrigo Company",
    price: 1925.34,
    rating: 1,
    review:
      "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
    image: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
  },
  {
    drug: "Long-Lasting Wicked Fresh - Cool Peppermint",
    company: "Tom's of Maine, Inc.",
    price: 641.64,
    rating: 4,
    review:
      "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
    image: "http://dummyimage.com/250x250.bmp/ff4444/ffffff"
  },
  {
    drug: "Nystatin",
    company: "Preferred Pharmaceuticals, Inc.",
    price: 1144.59,
    rating: 5,
    review:
      "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  },
  {
    drug: "Equate Nicotine",
    company: "Wal-Mart Stores Inc",
    price: 1454.22,
    rating: 3,
    review:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
    image: "http://dummyimage.com/250x250.png/dddddd/000000"
  },
  {
    drug: "Mackerel",
    company: "Nelco Laboratories, Inc.",
    price: 1866.04,
    rating: 3,
    review:
      "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio",
    image: "http://dummyimage.com/250x250.jpg/dddddd/000000"
  },
  {
    drug: "Bupivacaine HCl",
    company: "Cantrell Drug Company",
    price: 1727.89,
    rating: 5,
    review:
      "leo odio condimentum id luctus nec molestie sed justo pellentesque",
    image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  },
  {
    drug: "Kalydeco",
    company: "Vertex Pharmaceuticals Incorporated",
    price: 259.96,
    rating: 1,
    review:
      "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
    image: "http://dummyimage.com/250x250.bmp/ff4444/ffffff"
  }
];

export default db;
