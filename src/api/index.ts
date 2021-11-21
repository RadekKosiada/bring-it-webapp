import Products from '../interfaces/Products'

const products = [
    {
      sku: '41595440081',
      name: 'FELIX Doppelt Lecker Gelee Rind&Geflügel',
      image:
        'https://assets.bringmeister.de/media/p/41595440081/0/43d4b94bc22063c57618cecb4e87d129.jpg',
      packing: '85g Packung',
      price: 0.59,
      basePrice: 0.69,
      baseUnit: '100 g',
    },
    {
      sku: '88001123291',
      name: 'Deutscher Kasseler Lachs ohne Knochen',
      image:
        'https://assets.bringmeister.de/media/p/88001123291/0/a2354c4f4619341671344de9d8500088.jpg',
      packing: 'Wiegeware',
      price: 0.01099,
      basePrice: 10.99,
      baseUnit: '1 kg',
    },
    {
      sku: '395199081',
      name: 'Bauerngut Thüringer Mett/Hackepeter',
      image:
        'https://assets.bringmeister.de/media/p/395199081/0/eda2bcc637f8fba920a2ad0132d4db09.jpg',
      packing: 'Wiegeware',
      price: 0.00849,
      basePrice: 8.49,
      baseUnit: '1 kg',
    },
    {
      sku: '390005961',
      name: 'Wiesenhof Hähnchenbrustfilet',
      image:
        'https://assets.bringmeister.de/media/p/390005961/0/296934f20e51ccbfff31edda3f52a027.jpg',
      packing: 'Wiegeware',
      price: 0.01249,
      basePrice: 12.49,
      baseUnit: '1 kg',
    },
    {
      sku: '395004781',
      name: 'Bauerngut Frisches Schweinefilet besonders zart und mager',
      image:
        'https://assets.bringmeister.de/media/p/395004781/0/67c21ea517f7db1630d4b16509828bca.jpg',
      packing: 'ca. 500g Stück',
      price: 8.245,
      basePrice: 16.49,
      baseUnit: '1 kg',
    },
    {
      sku: '25270890092',
      name: 'EDEKA Kichererbsen',
      image:
        'https://assets.bringmeister.de/media/p/25270890092/0/ef9a0888031493b2aa02b306f5aa5f0b.jpg',
      packing: '6 x 400g Dose / Packung',
      price: 6.54,
      basePrice: 4.11,
      baseUnit: '1 kg',
    },
    {
      sku: '25270890091',
      name: 'EDEKA Kichererbsen',
      image:
        'https://assets.bringmeister.de/media/p/25270890091/0/666feb6f90cd51ed081d4f859a3f14f2.jpg',
      packing: '400g Dose',
      price: 1.09,
      basePrice: 4.11,
      baseUnit: '1 kg',
    },
    {
      sku: '395027261',
      name: 'Bauerngut Minutensteak',
      image:
        'https://assets.bringmeister.de/media/p/395027261/0/74955c355925a9f4bed972c439fb4796.jpg',
      packing: 'Wiegeware',
      price: 0.01199,
      basePrice: 11.99,
      baseUnit: '1 kg',
    },
    {
      sku: '390005891',
      name: 'Wiesenhof Hähnchenkeule mit Rückenanteil',
      image:
        'https://assets.bringmeister.de/media/p/390005891/0/2b0fd7e59c7ad52fd0379f6293745704.jpg',
      packing: 'Wiegeware',
      price: 0.00699,
      basePrice: 6.99,
      baseUnit: '1 kg',
    },
    {
      sku: '395198781',
      name: 'Bauerngut Gehacktes Rind & Schwein gemischt',
      image:
        'https://assets.bringmeister.de/media/p/395198781/0/766e727e7c61b545eda3181dddc15e24.jpg',
      packing: 'Wiegeware',
      price: 0.00899,
      basePrice: 8.99,
      baseUnit: '1 kg',
    },
    {
      sku: '36244210021',
      name: 'Alnatura Bio-Eier',
      image:
        'https://assets.bringmeister.de/media/p/36244210021/0/a91689dc9c61e4991f1b86d031684274.jpg',
      packing: 'Packung',
      price: 3.45,
      basePrice: 0,
      baseUnit: '0',
    },
    {
      sku: '88001123501',
      name: 'Kasseler Kotelett',
      image:
        'https://assets.bringmeister.de/media/p/88001123501/0/12cf0dd43fa3584741a1b70506287514.jpg',
      packing: 'Wiegeware',
      price: 0.00999,
      basePrice: 9.99,
      baseUnit: '1 kg',
    },
    {
      sku: '13898350012',
      name: 'EDEKA Kidneybohnen',
      image:
        'https://assets.bringmeister.de/media/p/13898350012/0/23b184bac04001fd5021b0218abfd387.jpg',
      packing: '6 x 400g Dose / Packung',
      price: 6.54,
      basePrice: 4.11,
      baseUnit: '1 kg',
    },
    {
      sku: '13898350011',
      name: 'EDEKA Kidneybohnen',
      image:
        'https://assets.bringmeister.de/media/p/13898350011/0/bd00b5bbacec87acbb9a792a2da12530.jpg',
      packing: '400g Dose',
      price: 1.09,
      basePrice: 4.11,
      baseUnit: '1 kg',
    },
    {
      sku: '33564460011',
      name: 'SURIG Essigessenz 25% hell 400 g',
      image:
        'https://assets.bringmeister.de/media/p/33564460011/0/845ea01fcea529e5019ebd7f97d73000.jpg',
      packing: '0.4kg Flasche',
      price: 1.45,
      basePrice: 3.63,
      baseUnit: '1 kg',
    },
    {
      sku: '1293810061',
      name: 'ORO di Parma Tomatenmark 3-fach konzentriert',
      image:
        'https://assets.bringmeister.de/media/p/1293810061/0/b65ad05901b5369d1d4857831993db0c.jpg',
      packing: '200g Packung',
      price: 1.49,
      basePrice: 0.75,
      baseUnit: '100 g',
    },
    {
      sku: '13410030002',
      name: 'EDEKA Italia Tomaten fein passiert',
      image:
        'https://assets.bringmeister.de/media/p/13410030002/0/08b03c6fb83b37cf416dc84452b600eb.jpg',
      packing: '6 x 0.5kg Packung / Pack',
      price: 5.34,
      basePrice: 1.78,
      baseUnit: '1 kg',
    },
    {
      sku: '13410030001',
      name: 'EDEKA Italia Tomaten, passiert',
      image:
        'https://assets.bringmeister.de/media/p/13410030001/0/154e1b1775b644e010bb105e2a495743.jpg',
      packing: '0.5kg Packung',
      price: 0.89,
      basePrice: 1.78,
      baseUnit: '1 kg',
    },
    {
      sku: '395198471',
      name: 'Bauerngut Rindergehacktes',
      image:
        'https://assets.bringmeister.de/media/p/395198471/0/982383a16264779f2f9bcc8bb7bed72a.jpg',
      packing: 'Wiegeware',
      price: 0.00999,
      basePrice: 9.99,
      baseUnit: '1 kg',
    },
    {
      sku: '16650080081',
      name: 'EDEKA Bio Tomaten in Stücken',
      image:
        'https://assets.bringmeister.de/media/p/16650080081/0/f93fb86ee9c8ce31c35b888781ebb428.jpg',
      packing: '0.4kg Dose',
      price: 0.69,
      basePrice: 1.73,
      baseUnit: '1 kg',
    },
    {
      sku: '390005341',
      name: 'Bauerngut Schweinekamm ohne Knochen in Scheiben',
      image:
        'https://assets.bringmeister.de/media/p/390005341/0/e80220f30a4297538af154b9f714cefa.jpg',
      packing: 'Wiegeware',
      price: 0.01099,
      basePrice: 10.99,
      baseUnit: '1 kg',
    },
    {
      sku: '1293800032',
      name: 'Oro di Parma Tomaten stückig Dose',
      image:
        'https://assets.bringmeister.de/media/p/1293800032/0/1d16f45994a59a0714253410689e194e.jpg',
      packing: '6 x 0.4kg Dose / Pack',
      price: 9.3,
      basePrice: 3.88,
      baseUnit: '1 kg',
    },
    {
      sku: '1293800031',
      name: 'ORO di Parma Tomaten Stückig',
      image:
        'https://assets.bringmeister.de/media/p/1293800031/0/93ce53cde55bcb0de1c22dbdd2a732f8.jpg',
      packing: '0.4kg Dose',
      price: 1.55,
      basePrice: 3.88,
      baseUnit: '1 kg',
    },
    {
      sku: '1308130081',
      name: 'Odenwald Apfelmus',
      image:
        'https://assets.bringmeister.de/media/p/1308130081/0/f6949db5dab23abd4950ba2efbd18690.jpg',
      packing: '0.35kg Glas',
      price: 1.55,
      basePrice: 4.37,
      baseUnit: '1 kg',
    },
    {
      sku: '1292550081',
      name: 'Bonduelle Erbsen & Möhrchen',
      image:
        'https://assets.bringmeister.de/media/p/1292550081/0/cd1488093efc0a79762bf128b3de0992.jpg',
      packing: '400g Dose',
      price: 1.45,
      basePrice: 5.47,
      baseUnit: '1 kg',
    },
    {
      sku: '9080290062',
      name: 'Mutti Polpa',
      image:
        'https://assets.bringmeister.de/media/p/9080290062/0/9f510cff8545b220ed8f7bd878238e80.jpg',
      packing: '6 x 400g Dose / Packung',
      price: 8.7,
      basePrice: 3.63,
      baseUnit: '1 kg',
    },
    {
      sku: '9080290061',
      name: 'Mutti Polpa',
      image:
        'https://assets.bringmeister.de/media/p/9080290061/0/4138e75629360d8a20d1dfaedc98de12.jpg',
      packing: '0.4kg Dose',
      price: 1.45,
      basePrice: 3.63,
      baseUnit: '1 kg',
    },
    {
      sku: '1307090001',
      name: 'Bad Reichenhaller Alpen Jodsalz',
      image:
        'https://assets.bringmeister.de/media/p/1307090001/0/6fc9b57d2c02dd053eacae4ab718e220.jpg',
      packing: '0.5kg Packung',
      price: 0.69,
      basePrice: 1.38,
      baseUnit: '1 kg',
    },
    {
      sku: '18096500011',
      name: 'LANGNESE Konfekt',
      image:
        'https://assets.bringmeister.de/media/p/18096500011/0/b48e042d090657bd2cbf521ef73bad9e.jpg',
      packing: '100ml Packung',
      price: 1.6,
      basePrice: 1.6,
      baseUnit: '100 ml',
    },
    {
      sku: '1285790081',
      name: 'Kühne Gewürzgurken',
      image:
        'https://assets.bringmeister.de/media/p/1285790081/0/971d12f16e4fb0f45d00a7bc9e37c52c.jpg',
      packing: '670g Glas',
      price: 1.99,
      basePrice: 5.53,
      baseUnit: '1 kg',
    },
    {
      sku: '8509460041',
      name: 'Bonduelle Bio Goldmais',
      image:
        'https://assets.bringmeister.de/media/p/8509460041/0/de3dbc7ad1de134605a45118f8d007e5.jpg',
      packing: '300g Dose',
      price: 2.09,
      basePrice: 7.33,
      baseUnit: '1 kg',
    },
    {
      sku: '88001138411',
      name: 'Bauerngut Delikatess Bauchspeck',
      image:
        'https://assets.bringmeister.de/media/p/88001138411/0/8a0894ddb3088773a17ed884925d5287.jpg',
      packing: 'Wiegeware',
      price: 0.01599,
      basePrice: 15.99,
      baseUnit: '1 kg',
    },
    {
      sku: '43494870071',
      name: 'Bonduelle Goldmais',
      image:
        'https://assets.bringmeister.de/media/p/43494870071/0/43f577d1d8195e76fbb557dc11bb5335.jpg',
      packing: '150g Dose',
      price: 1.09,
      basePrice: 0.78,
      baseUnit: '100 g',
    },
    {
      sku: '1293260091',
      name: 'THOMY Reines Sonnenblumenöl',
      image:
        'https://assets.bringmeister.de/media/p/1293260091/0/cd96bd702d8d427c90ada9339e243fb8.jpg',
      packing: '0.75l Flasche',
      price: 2.55,
      basePrice: 3.4,
      baseUnit: '1 Liter',
    },
    {
      sku: '301101051',
      name: 'Haehnlein Deutsche Bio Eier',
      image:
        'https://assets.bringmeister.de/media/p/301101051/0/59187ce98e51731cc0fb86ca9a3475b7.jpg',
      packing: 'Packung',
      price: 2.99,
      basePrice: 0,
      baseUnit: '0',
    },
    {
      sku: '37581740012',
      name: 'Alnatura Bio Origin Oliven ohne Stein',
      image:
        'https://assets.bringmeister.de/media/p/37581740012/0/bbb9cf181898d42d60dc198dd24cba2f.jpg',
      packing: '6 x 0.35kg Glas / Packung',
      price: 17.1,
      basePrice: 1.58,
      baseUnit: '100 g',
    },
    {
      sku: '37581740011',
      name: 'Alnatura Bio Origin Oliven ohne Stein',
      image:
        'https://assets.bringmeister.de/media/p/37581740011/0/d6cddce09a2ca48dcae66d29d1a34e63.jpg',
      packing: '0.35kg Glas',
      price: 2.85,
      basePrice: 1.58,
      baseUnit: '100 g',
    },
    {
      sku: '23602820059',
      name: 'BOOSTER Absolute Zero',
      image:
        'https://assets.bringmeister.de/media/p/23602820059/0/604297b3743138fea5f62c0d09ca45ac.jpg',
      packing: '4 x 0.33l Dose / Pack',
      price: 2.76,
      basePrice: 2.09,
      baseUnit: '1 Liter',
    },
    {
      sku: '23602820052',
      name: 'Booster Absolute Zero Energy Drink',
      image:
        'https://assets.bringmeister.de/media/p/23602820052/0/5364c30c6267e21ad4cd9d688cbda54c.jpg',
      packing: '24 x 0.33l Dose / Packung',
      price: 16.56,
      basePrice: 2.09,
      baseUnit: '1 Liter',
    },
    {
      sku: '390003361',
      name: 'Bauerngut Rückensteak "Kräuterbutter"',
      image:
        'https://assets.bringmeister.de/media/p/390003361/0/e3940f7f864cd6bf2a258d5b193bb473.jpg',
      packing: 'Wiegeware',
      price: 0.01299,
      basePrice: 12.99,
      baseUnit: '1 kg',
    },
    {
      sku: '395003311',
      name: 'Bauerngut Schnitzel aus der Oberschale',
      image:
        'https://assets.bringmeister.de/media/p/395003311/0/af738b38b413f5392be2c6577633cff4.jpg',
      packing: 'Wiegeware',
      price: 0.01199,
      basePrice: 11.99,
      baseUnit: '1 kg',
    },
    {
      sku: '14038130061',
      name: 'Bonduelle Bio Goldmais',
      image:
        'https://assets.bringmeister.de/media/p/14038130061/0/b491fde9c3c8870d6473a746c8376f49.jpg',
      packing: '150g Dose',
      price: 1.35,
      basePrice: 0.96,
      baseUnit: '100 g',
    },
    {
      sku: '32790060011',
      name: 'Schöller Big Sandwich Multipack',
      image:
        'https://assets.bringmeister.de/media/p/32790060011/0/1490eeceb1552365644cf6fd69669438.jpg',
      packing: '0.84l Packung',
      price: 2.99,
      basePrice: 3.56,
      baseUnit: '1 Liter',
    },
    {
      sku: '14378200071',
      name: 'EDEKA Baked Beans',
      image:
        'https://assets.bringmeister.de/media/p/14378200071/0/3e990a52ac886883ecfd1383dce7db93.jpg',
      packing: '0.4kg Dose',
      price: 1.09,
      basePrice: 2.73,
      baseUnit: '1 kg',
    },
    {
      sku: '88001136671',
      name: 'Bauerngut Grobe Bratwurst',
      image:
        'https://assets.bringmeister.de/media/p/88001136671/0/f58a31eeebe36f39628cd05e1f5b97c6.jpg',
      packing: 'ca. 100g Stück',
      price: 0.999,
      basePrice: 9.99,
      baseUnit: '1 kg',
    },
    {
      sku: '1307310071',
      name: 'Bad Reichenhaller Alpen Jodsalz + Fluorid',
      image:
        'https://assets.bringmeister.de/media/p/1307310071/0/a23cf33d9d2b957a8d97cf1a157b685a.jpg',
      packing: '0.5kg Packung',
      price: 0.85,
      basePrice: 1.7,
      baseUnit: '1 kg',
    },
    {
      sku: '1293250061',
      name: 'BERTOLLI Natives Olivenöl Extra Originale',
      image:
        'https://assets.bringmeister.de/media/p/1293250061/0/4e749db083a51721d3315cb9dfadd096.jpg',
      packing: '0.5l Flasche',
      price: 6.05,
      basePrice: 12.1,
      baseUnit: '1 Liter',
    },
    {
      sku: '16208710052',
      name: 'EDEKA Bio WWF Apfelmark',
      image:
        'https://assets.bringmeister.de/media/p/16208710052/0/ea82531aa6128fcf89bb87b8f43e633e.jpg',
      packing: '6 x 0.7kg Glas / Pack',
      price: 9.54,
      basePrice: 2.27,
      baseUnit: '1 kg',
    },
    {
      sku: '16208710051',
      name: 'EDEKA Bio Apfelmark',
      image:
        'https://assets.bringmeister.de/media/p/16208710051/0/4ff0caf303d5bdaff4a808ae699fd284.jpg',
      packing: '0.7kg Glas',
      price: 1.59,
      basePrice: 2.27,
      baseUnit: '1 kg',
    },
    {
      sku: '1307040051',
      name: 'Bad Reichenhaller Alpensalz',
      image:
        'https://assets.bringmeister.de/media/p/1307040051/0/326193d61ed426e11d98aabacdaa43c1.jpg',
      packing: '0.5kg Packung',
      price: 0.65,
      basePrice: 1.3,
      baseUnit: '1 kg',
    },
    {
      sku: '34135020021',
      name: 'Alnatura Bio Kidney Bohnen',
      image:
        'https://assets.bringmeister.de/media/p/34135020021/0/2d955ce0f32c655d7865102ac43ad9da.jpg',
      packing: '0.4kg Dose',
      price: 1.49,
      basePrice: 0.6,
      baseUnit: '100 g',
    },
    {
      sku: '38395980012',
      name: 'EDEKA Bio WWF Tomaten passiert',
      image:
        'https://assets.bringmeister.de/media/p/38395980012/0/835ed548857d3f09deb70236379eddf6.jpg',
      packing: '6 x 0.69kg Glas / Pack',
      price: 8.94,
      basePrice: 2.16,
      baseUnit: '1 kg',
    },
    {
      sku: '38395980011',
      name: 'EDEKA Bio Passierte Tomaten',
      image:
        'https://assets.bringmeister.de/media/p/38395980011/0/3176ee5293842ad282299ad207ce12f0.jpg',
      packing: '0.69kg Glas',
      price: 1.49,
      basePrice: 2.16,
      baseUnit: '1 kg',
    },
    {
      sku: '390006261',
      name: 'Bauerngut Pfannenfertiges Schnitzel Wiener Art',
      image:
        'https://assets.bringmeister.de/media/p/390006261/0/0ee646e7d99bbd0e6cb328f16d7bd11a.jpg',
      packing: 'Wiegeware',
      price: 0.01299,
      basePrice: 12.99,
      baseUnit: '1 kg',
    },
    {
      sku: '88001427331',
      name: 'Bauerngut Frische feine Bratwurst',
      image:
        'https://assets.bringmeister.de/media/p/88001427331/0/ae92a5a002e2ee73ab591115553a1d7e.jpg',
      packing: 'ca. 100g Stück',
      price: 0.999,
      basePrice: 9.99,
      baseUnit: '1 kg',
    },
    {
      sku: '7732770099',
      name: 'Club-Mate',
      image:
        'https://assets.bringmeister.de/media/p/7732770099/0/65fd0d6947f052847573f517539de535.jpg',
      packing: '4 x 0.5l Flasche / Pack',
      price: 3.8,
      basePrice: 1.9,
      baseUnit: '1 Liter',
    },
    {
      sku: '7732770092',
      name: 'CLUB-MATE Club-Mate',
      image:
        'https://assets.bringmeister.de/media/p/7732770092/0/67002febc29b7126441dfef671b99560.jpg',
      packing: '20 x 0.5l Flasche im Kasten',
      price: 19,
      basePrice: 1.9,
      baseUnit: '1 Liter',
    },
    {
      sku: '2383990001',
      name: 'FEINKOST DITTMANN Spanische Oliven grün ohne Stein',
      image:
        'https://assets.bringmeister.de/media/p/2383990001/0/758486b3d6909be955af87bb495db11d.jpg',
      packing: '140g Glas',
      price: 1.35,
      basePrice: 2.25,
      baseUnit: '100 g',
    },
    {
      sku: '25339000021',
      name: 'Spreewaldhof Apfel-Rotkohl',
      image:
        'https://assets.bringmeister.de/media/p/25339000021/0/fa25a02981997f13fe4be54c03c09838.jpg',
      packing: '0.4kg Packung',
      price: 1.35,
      basePrice: 3.38,
      baseUnit: '1 kg',
    },
    {
      sku: '8918300011',
      name: 'Mutti Passata Passierte Tomaten',
      image:
        'https://assets.bringmeister.de/media/p/8918300011/0/0e461a929052ed7c0c6e15125cbf87ee.jpg',
      packing: '0.7kg Flasche',
      price: 2.19,
      basePrice: 3.13,
      baseUnit: '1 kg',
    },
    {
      sku: '13467490049',
      name: 'BOOSTER Energy Drink',
      image:
        'https://assets.bringmeister.de/media/p/13467490049/0/af85488b99a868addf57e87641db9b4c.jpg',
      packing: '4 x 0.33l Dose / Pack',
      price: 2.76,
      basePrice: 2.09,
      baseUnit: '1 Liter',
    },
    {
      sku: '13467490042',
      name: 'Booster Original Energy Drink',
      image:
        'https://assets.bringmeister.de/media/p/13467490042/0/517341787d522c115cdbd558f7a15602.jpg',
      packing: '24 x 0.33l Dose / Packung',
      price: 16.56,
      basePrice: 2.09,
      baseUnit: '1 Liter',
    },
    {
      sku: '8106350091',
      name: 'EDEKA Bio Natives Olivenöl extra aus Griechenland',
      image:
        'https://assets.bringmeister.de/media/p/8106350091/0/d9989ffe3c69a1e54c629c749356f86a.jpg',
      packing: '0.5l Flasche',
      price: 4.99,
      basePrice: 9.98,
      baseUnit: '1 Liter',
    },
    {
      sku: '25871310011',
      name: 'Landliebe Eiscreme Bourbon-Vanille',
      image:
        'https://assets.bringmeister.de/media/p/25871310011/0/301af1cc4cb06e88efdbe413545e07c4.jpg',
      packing: '0.75l Becher',
      price: 2.99,
      basePrice: 3.99,
      baseUnit: '1 Liter',
    },
    {
      sku: '390005271',
      name: 'Wiesenhof Hähnchen Unterschenkel',
      image:
        'https://assets.bringmeister.de/media/p/390005271/0/8c0fc89df5c77a65d1e596f19b37b1df.jpg',
      packing: 'Wiegeware',
      price: 0.00749,
      basePrice: 7.49,
      baseUnit: '1 kg',
    },
    {
      sku: '39118600041',
      name: 'LANGNESE Cornetto Classico',
      image:
        'https://assets.bringmeister.de/media/p/39118600041/0/9764587b28e8e8272ea7276359475e12.jpg',
      packing: '0.54l Packung',
      price: 3.29,
      basePrice: 6.09,
      baseUnit: '1 Liter',
    },
    {
      sku: '1201760091',
      name: 'LANGNESE Cuja Mara Split',
      image:
        'https://assets.bringmeister.de/media/p/1201760091/0/a0b50ae1e4e8915c3cdae59b03866319.jpg',
      packing: '0.5l Packung',
      price: 2.99,
      basePrice: 5.93,
      baseUnit: '1 Liter',
    },
    {
      sku: '2511640091',
      name: 'Ostmann Pfefferkörner schwarz',
      image:
        'https://assets.bringmeister.de/media/p/2511640091/0/884be0846862a3327a4c1dea9d44df3c.jpg',
      packing: '50g Packung',
      price: 2.55,
      basePrice: 5.1,
      baseUnit: '100 g',
    },
    {
      sku: '2175610061',
      name: 'Bad Reichenhaller Alpen Jodsalz mit Fluorid + Folsäure',
      image:
        'https://assets.bringmeister.de/media/p/2175610061/0/9a159ef31ad1604f7e015837bca2fce2.jpg',
      packing: '0.5kg Packung',
      price: 0.99,
      basePrice: 1.98,
      baseUnit: '1 kg',
    },
    {
      sku: '29694470011',
      name: 'Alnatura Bio Oregano gerebelt',
      image:
        'https://assets.bringmeister.de/media/p/29694470011/0/87f6d1e50ccd13dcc3942beee891d9ae.jpg',
      packing: '15g Packung',
      price: 2.09,
      basePrice: 13.93,
      baseUnit: '100 g',
    },
    {
      sku: '13136210072',
      name: 'EDEKA Mais supersweet',
      image:
        'https://assets.bringmeister.de/media/p/13136210072/0/212d691e8e45ed94b403f0230bac48cb.jpg',
      packing: '6 x 150g Dose / Pack',
      price: 4.14,
      basePrice: 0.49,
      baseUnit: '100 g',
    },
    {
      sku: '13136210071',
      name: 'EDEKA Gemüsemais',
      image:
        'https://assets.bringmeister.de/media/p/13136210071/0/3f0cfa33dc9b55beca84c0ad7068b357.jpg',
      packing: '150g Dose',
      price: 0.69,
      basePrice: 0.49,
      baseUnit: '100 g',
    },
    {
      sku: '301101021',
      name: 'GUT&GÜNSTIG Eier aus Bodenhaltung Initiative Lebenswert, 10er-Schale',
      image:
        'https://assets.bringmeister.de/media/p/35237230031/0/b8448c75c975b21e03632c21e92f1cac.jpg',
      packing: 'Packung',
      price: 1.59,
      basePrice: 0,
      baseUnit: '0',
    },
    {
      sku: '30448760081',
      name: 'Schöller Family Box',
      image:
        'https://assets.bringmeister.de/media/p/30448760081/0/334a8245a3c0faedb0c98ff77ea37a0a.jpg',
      packing: '0.56l Packung',
      price: 2.99,
      basePrice: 5.31,
      baseUnit: '1 Liter',
    },
    {
      sku: '29721150031',
      name: 'Alnatura Meersalz',
      image:
        'https://assets.bringmeister.de/media/p/29721150031/0/668a8584b5d9583ffed7f5fa70cd5105.jpg',
      packing: '0.5kg Packung',
      price: 0.99,
      basePrice: 1.98,
      baseUnit: '1 kg',
    },
    {
      sku: '1389030041',
      name: 'Rapso Rapsöl',
      image:
        'https://assets.bringmeister.de/media/p/1389030041/0/1c09953c8687aadfb6be65ad9a3c943a.jpg',
      packing: '0.75l Flasche',
      price: 3.95,
      basePrice: 5.27,
      baseUnit: '1 Liter',
    },
    {
      sku: '1483880081',
      name: 'Spreewaldhof Spreelinge',
      image:
        'https://assets.bringmeister.de/media/p/1483880081/0/96d73ec3c83ee3dc56a3fe8bf7a1c300.jpg',
      packing: '670g Glas',
      price: 1.79,
      basePrice: 4.97,
      baseUnit: '1 kg',
    },
    {
      sku: '22171770011',
      name: 'Kühne Feurig scharfe Jalapeño',
      image:
        'https://assets.bringmeister.de/media/p/22171770011/0/d18f53987675c2f73d7b7c08b882f492.jpg',
      packing: '330g Glas',
      price: 2.75,
      basePrice: 1.67,
      baseUnit: '100 g',
    },
    {
      sku: '29679430082',
      name: 'Alnatura Bio Kichererbsen',
      image:
        'https://assets.bringmeister.de/media/p/29679430082/0/c4d60d342c29fac09502d06af6248e9e.jpg',
      packing: '12 x 350g Glas / Pack',
      price: 16.2,
      basePrice: 0.61,
      baseUnit: '100 g',
    },
    {
      sku: '29679430081',
      name: 'Alnatura Bio Kichererbsen',
      image:
        'https://assets.bringmeister.de/media/p/29679430081/0/7dcb6f289835b929941bedab44dfe2b3.jpg',
      packing: '0.35kg Glas',
      price: 1.35,
      basePrice: 0.61,
      baseUnit: '100 g',
    },
    {
      sku: '2512330041',
      name: 'Ostmann Lorbeerblätter',
      image:
        'https://assets.bringmeister.de/media/p/2512330041/0/606bcdcbeae40b0cbd528d6136082705.jpg',
      packing: '5g Packung',
      price: 2.19,
      basePrice: 0,
      baseUnit: '0',
    },
    {
      sku: '1442550071',
      name: 'Würzgut Essigessenz',
      image:
        'https://assets.bringmeister.de/media/p/1442550071/0/89c838e16993e24bd720d29709aa9486.jpg',
      packing: '0.4kg Flasche',
      price: 0.69,
      basePrice: 1.73,
      baseUnit: '1 kg',
    },
    {
      sku: '43486730031',
      name: 'LANGNESE Magnum Mini Yoghurt & Raspberry Familienpackung',
      image:
        'https://assets.bringmeister.de/media/p/43486730031/0/8b03fb30f796eec097748df9d7cb0501.jpg',
      packing: '0.33l Packung',
      price: 3.29,
      basePrice: 9.97,
      baseUnit: '1 Liter',
    },
    {
      sku: '35559250041',
      name: 'EDEKA Ananas-Dessertstücke',
      image:
        'https://assets.bringmeister.de/media/p/35559250041/0/43c922fe29c7097129770623b79dc461.jpg',
      packing: '227g Dose',
      price: 1.39,
      basePrice: 1,
      baseUnit: '100 g',
    },
    {
      sku: '1285780051',
      name: 'Kühne Cornichons',
      image:
        'https://assets.bringmeister.de/media/p/1285780051/0/4a08444309e30641020f428358fbacc1.jpg',
      packing: '330g Glas',
      price: 2.09,
      basePrice: 1.1,
      baseUnit: '100 g',
    },
    {
      sku: '390003431',
      name: 'Wiesenhof Hähnchenkeulen "Bayerische Art"',
      image:
        'https://assets.bringmeister.de/media/p/390003431/0/73dbb98864cd909ffbe2fe2164907bb2.jpg',
      packing: 'Wiegeware',
      price: 0.00799,
      basePrice: 7.99,
      baseUnit: '1 kg',
    },
    {
      sku: '395001571',
      name: 'Wiesenhof Hähnchenpfanne "Gyros Art"',
      image:
        'https://assets.bringmeister.de/media/p/395001571/0/283094a2a8af3cdfabac6d047de07643.jpg',
      packing: 'Wiegeware',
      price: 0.01299,
      basePrice: 12.99,
      baseUnit: '1 kg',
    },
    {
      sku: '395197861',
      name: 'Kasseler-Nackenbraten ohne Knochen',
      image:
        'https://assets.bringmeister.de/media/p/395197861/0/b356c579a204e17404a39b4a938f91aa.jpg',
      packing: 'Wiegeware',
      price: 0.01099,
      basePrice: 10.99,
      baseUnit: '1 kg',
    },
    {
      sku: '2510970001',
      name: 'Ostmann Pfeffer schwarz',
      image:
        'https://assets.bringmeister.de/media/p/2510970001/0/6a2c115b5cb11087d156d25262546100.jpg',
      packing: '40g Dose',
      price: 2.55,
      basePrice: 6.38,
      baseUnit: '100 g',
    },
    {
      sku: '1312300021',
      name: 'Saupiquet Thunfisch Naturale ohne Öl',
      image:
        'https://assets.bringmeister.de/media/p/1312300021/0/04d36e5d887ede866133c1e473d7e9a3.jpg',
      packing: '185g Dose',
      price: 2.59,
      basePrice: 1.85,
      baseUnit: '100 g',
    },
    {
      sku: '1450280001',
      name: 'Spreewald Feldmann Rote Bete Streifen',
      image:
        'https://assets.bringmeister.de/media/p/1450280001/0/ee197528ab589733f109d56bd59318ec.jpg',
      packing: '330g Glas',
      price: 0.99,
      basePrice: 0.45,
      baseUnit: '100 g',
    },
    {
      sku: '29698020041',
      name: 'Alnatura Bio Apfelmark mit Banane',
      image:
        'https://assets.bringmeister.de/media/p/29698020041/0/713587fb0f01e49be77b524600e58d4d.jpg',
      packing: '0.36kg Glas',
      price: 1.45,
      basePrice: 4.03,
      baseUnit: '1 kg',
    },
    {
      sku: '1949890081',
      name: 'LANGNESE Magnum After Dinner',
      image:
        'https://assets.bringmeister.de/media/p/1949890081/0/aebd911a9132e6fe500d407b93a9ad6c.jpg',
      packing: '0.35l Packung',
      price: 3.29,
      basePrice: 9.4,
      baseUnit: '1 Liter',
    },
    {
      sku: '25561900062',
      name: 'GUT&GÜNSTIG Sonnenmais',
      image:
        'https://assets.bringmeister.de/media/p/25561900062/0/d80b1e70740a83bd6be48e4eaf1f1891.jpg',
      packing: '12 x 330g Dose / Packung',
      price: 7.08,
      basePrice: 2.07,
      baseUnit: '1 kg',
    },
    {
      sku: '25561900061',
      name: 'GUT&GÜNSTIG Sonnenmais',
      image:
        'https://assets.bringmeister.de/media/p/25561900061/0/b77125bacb3f2a3152877060be8f393b.jpg',
      packing: '330g Dose',
      price: 0.59,
      basePrice: 2.07,
      baseUnit: '1 kg',
    },
    {
      sku: '32834250071',
      name: 'Alnatura Bio Tomatenmark',
      image:
        'https://assets.bringmeister.de/media/p/32834250071/0/ddf57ae3a11d2af00394319d0bca4e41.jpg',
      packing: '200g Packung',
      price: 1.09,
      basePrice: 0.55,
      baseUnit: '100 g',
    },
    {
      sku: '36120400041',
      name: 'MÖVENPICK Chocolate Chips Eiscreme',
      image:
        'https://assets.bringmeister.de/media/p/36120400041/0/b8cd8101bf3bda5a8077a25f6e383d5b.jpg',
      packing: '0.9l Becher',
      price: 3.29,
      basePrice: 3.66,
      baseUnit: '1 Liter',
    },
    {
      sku: '11783020081',
      name: 'ORO di Parma Tomaten stückig im Combibloc',
      image:
        'https://assets.bringmeister.de/media/p/11783020081/0/0a8c503ffd2d740b6d3ece4c28030fb0.jpg',
      packing: '0.4kg Packung',
      price: 1.55,
      basePrice: 3.88,
      baseUnit: '1 kg',
    },
    {
      sku: '34134690061',
      name: 'Alnatura Bio Weiße Bohnen',
      image:
        'https://assets.bringmeister.de/media/p/34134690061/0/f1cf1e77e6d374e154f64495e8001a63.jpg',
      packing: '0.4kg Dose',
      price: 1.25,
      basePrice: 0.5,
      baseUnit: '100 g',
    },
    {
      sku: '88001118521',
      name: 'Bauerngut Jungbullen Rindfleisch Gulasch',
      image:
        'https://assets.bringmeister.de/media/p/88001118521/0/271c273b0c04ec851f6d120400e9116f.jpg',
      packing: 'Wiegeware',
      price: 0.01399,
      basePrice: 13.99,
      baseUnit: '1 kg',
    },
    {
      sku: '41302770001',
      name: 'EDEKA Bio Gemüsemais',
      image:
        'https://assets.bringmeister.de/media/p/41302770001/0/50915416cb9fb4127e26dee094fa16c8.jpg',
      packing: '330g Dose',
      price: 1.29,
      basePrice: 4.53,
      baseUnit: '1 kg',
    },
    {
      sku: '36120500011',
      name: 'MÖVENPICK Bourbon Vanille Eiscreme',
      image:
        'https://assets.bringmeister.de/media/p/36120500011/0/611d7d3f8a4417ffc9329edac6743846.jpg',
      packing: '0.9l Packung',
      price: 3.29,
      basePrice: 3.66,
      baseUnit: '1 Liter',
    },
    {
      sku: '2041300001',
      name: 'SNICKERS Snickers Ice Cream',
      image:
        'https://assets.bringmeister.de/media/p/2041300001/0/5e60e11eb5ccb91c157bdcf4a677df87.jpg',
      packing: '0.32l Packung',
      price: 2.49,
      basePrice: 7.83,
      baseUnit: '1 Liter',
    },
    {
      sku: '40465200071',
      name: 'Bonduelle Goldmais',
      image:
        'https://assets.bringmeister.de/media/p/40465200071/0/42af9d0eee2e408fc79fe64d526c3d3c.jpg',
      packing: '300g Dose',
      price: 1.45,
      basePrice: 5.09,
      baseUnit: '1 kg',
    },
    {
      sku: '1292640021',
      name: 'Bonduelle Junge Erbsen',
      image:
        'https://assets.bringmeister.de/media/p/1292640021/0/1412a023b378cabe9ef1eb722c621e28.jpg',
      packing: '400g Dose',
      price: 1.45,
      basePrice: 5.18,
      baseUnit: '1 kg',
    },
    {
      sku: '395003621',
      name: 'Bauerngut Schweinekammbraten ohne Knochen',
      image:
        'https://assets.bringmeister.de/media/p/395003621/0/afd5761329d70ba1b7796f4c5a1d4df4.jpg',
      packing: 'Wiegeware',
      price: 0.01099,
      basePrice: 10.99,
      baseUnit: '1 kg',
    },
    {
      sku: '395198851',
      name: 'Bauerngut Schweinegulasch',
      image:
        'https://assets.bringmeister.de/media/p/395198851/0/ce61ec0d3a985ccde9e481a696ca1cf1.jpg',
      packing: 'Wiegeware',
      price: 0.00849,
      basePrice: 8.49,
      baseUnit: '1 kg',
    },
    {
      sku: '30454080021',
      name: 'Schöller Kaktus Multipack',
      image:
        'https://assets.bringmeister.de/media/p/30454080021/0/07a89b298c1230a6adaa97756b0e578b.jpg',
      packing: '0.4l Packung',
      price: 2.99,
      basePrice: 7.38,
      baseUnit: '1 Liter',
    },
    {
      sku: '22995250081',
      name: 'Danæg Eier',
      image:
        'https://assets.bringmeister.de/media/p/22995250081/0/b903a1e6ff522dde0471092bfece63f3.jpg',
      packing: 'Packung',
      price: 3.69,
      basePrice: 0,
      baseUnit: '0',
    },
    {
      sku: '2384070001',
      name: 'FEINKOST DITTMANN Grüne Oliven ohne Stein',
      image:
        'https://assets.bringmeister.de/media/p/2384070001/0/e959233af4acbfc89fc51bc6f8b3138f.jpg',
      packing: '270g Packung',
      price: 1.35,
      basePrice: 1.08,
      baseUnit: '100 g',
    },
    {
      sku: '13457710081',
      name: 'Bio Zentrale Rapsöl',
      image:
        'https://assets.bringmeister.de/media/p/13457710081/0/32e9295386c4a38f86dac8b868e25290.jpg',
      packing: '0.5l Flasche',
      price: 5.49,
      basePrice: 10.98,
      baseUnit: '1 Liter',
    },
    {
      sku: '395003791',
      name: 'Bauerngut Frischer Schweinebauch am Stück',
      image:
        'https://assets.bringmeister.de/media/p/395003791/0/b23b5926b88fc8f8432daf26649b7cf5.jpg',
      packing: 'Wiegeware',
      price: 0.00899,
      basePrice: 8.99,
      baseUnit: '1 kg',
    },
    {
      sku: '1285840001',
      name: 'Kühne Rote Bete',
      image:
        'https://assets.bringmeister.de/media/p/1285840001/0/6304f567158a34cf5dbf886b469d1241.jpg',
      packing: '330g Glas',
      price: 1.25,
      basePrice: 0.57,
      baseUnit: '100 g',
    },
    {
      sku: '8030660012',
      name: 'GUT&GÜNSTIG Tomaten, passiert',
      image:
        'https://assets.bringmeister.de/media/p/8030660012/0/6092e75d521d8bf19ff973ee02675a7f.jpg',
      packing: '12 x 500g Packung / Packung',
      price: 5.4,
      basePrice: 0.9,
      baseUnit: '1 kg',
    },
    {
      sku: '8030660011',
      name: 'GUT&GÜNSTIG Tomaten, passiert',
      image:
        'https://assets.bringmeister.de/media/p/8030660011/0/631ef2775a209e703657b6a037e94b25.jpg',
      packing: '0.5kg Packung',
      price: 0.45,
      basePrice: 0.9,
      baseUnit: '1 kg',
    },
    {
      sku: '21842510091',
      name: 'EDEKA Gourmet-Sauerkraut',
      image:
        'https://assets.bringmeister.de/media/p/21842510091/0/f24c85a18527ba2632a38f0227ecb7d9.jpg',
      packing: '400g Packung',
      price: 0.99,
      basePrice: 2.64,
      baseUnit: '1 kg',
    },
    {
      sku: '29680110032',
      name: 'Alnatura Bio Mais',
      image:
        'https://assets.bringmeister.de/media/p/29680110032/0/341405ebc0fceefd4f15317958fb725b.jpg',
      packing: '12 x 340g Glas / Pack',
      price: 16.2,
      basePrice: 0.59,
      baseUnit: '100 g',
    },
    {
      sku: '29680110031',
      name: 'Alnatura Bio Mais',
      image:
        'https://assets.bringmeister.de/media/p/29680110031/0/a72be5393b0f97ca59b9e96ea4297f5c.jpg',
      packing: '0.34kg Glas',
      price: 1.35,
      basePrice: 0.59,
      baseUnit: '100 g',
    },
    {
      sku: '35556040001',
      name: 'EDEKA Ananas ganze Scheiben',
      image:
        'https://assets.bringmeister.de/media/p/35556040001/0/993cafed0683ffa1176bed6bed93411e.jpg',
      packing: '227g Dose',
      price: 1.39,
      basePrice: 1,
      baseUnit: '100 g',
    },
    {
      sku: '20582630041',
      name: 'Top Taste Röstzwiebeln Bacon',
      image:
        'https://assets.bringmeister.de/media/p/20582630041/0/20d9897dc4fb53f77180cee6838d5d25.jpg',
      packing: '100g Becher',
      price: 1.09,
      basePrice: 1.09,
      baseUnit: '100 g',
    },
  ];
  
  export async function fetchProducts(query: string) {
    return new Promise<{
      totalResults: number;
      products: typeof products;
    }>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.01) {
          reject("'network' error");
        } else {
          const filteredProducts: Array<Products> = [];
          // makes search query/user's input case insensitive
          products.forEach(p  => {
            if(p.name.toLowerCase().includes(query.toLowerCase())) {
              filteredProducts.push(p)
            }
          })
          resolve({
            totalResults: filteredProducts.length,
            products: filteredProducts,
          });
        }
      }, Math.random() * 100 + 100);
    });
  }
  