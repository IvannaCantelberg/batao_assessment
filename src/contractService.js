const ContractsData = [
  {
    id: 1,
    years: 1,
    monthsGratis: 2,
    tariffs: [
      {
        title: 'Shared',
        perMonth: '179,00',
      },
      {
        title: 'Onager',
        perMonth: '439,00',
      },
      {
        title: 'Scorpio',
        perMonth: '879,00',
      },
    ],
  },
  {
    id: 2,
    years: 2,
    monthsGratis: 4,
    tariffs: [
      {
        title: 'Shared',
        perMonth: '179,00',
        price: '119,33',
      },
      {
        title: 'Onager',
        perMonth: '439,00',
        price: '292,67',
      },
      {
        title: 'Scorpio',
        perMonth: '879,00',
        price: '586,00',
      },
    ],
  },
  {
    id: 3,
    years: 3,
    monthsGratis: 6,
    tariffs: [
      {
        title: 'Shared',
        perMonth: '179,00',
        price: '89,50',
      },
      {
        title: 'Onager',
        perMonth: '439,00',
        price: '219,50',
      },
      {
        title: 'Scorpio',
        perMonth: '879,00',
        price: '439,50',
      },
    ],
  },
  {
    id: 4,
    years: 0,
    monthsGratis: 0,
    tariffs: [
      {
        title: 'Shared',
        perMonth: '179,00',
        price: '179,00',
      },
      {
        title: 'Onager',
        perMonth: '439,00',
        price: '439,00',
      },
      {
        title: 'Scorpio',
        perMonth: '879,00',
        price: '879,00',
      },
    ],
  },
];

const TariffsDetails = [
  {
    id: 1,
    data: [
      {
        title: 'Processor',
        value: 'AMD Ryzen 5 3600',
      },
      {
        title: 'Cores',
        value: 'Hexa-Core',
      },
      {
        title: 'Geheugen',
        value: 'RAM 64GB DDR4',
      },
      {
        title: 'Opslag',
        value: 'SSD 2 x 512 GB',
      },
      {
        title: 'Bandbreedte',
        value: '1 Gbit/s',
      },
      {
        title: 'Aantal klanten',
        value: '3',
      },
      {
        title: 'Backup frequentie',
        value: 'Wekelijks',
      },
      {
        title: 'Support',
        value: 'Kantooruren',
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        title: 'Processor',
        value: 'AMD Ryzen 5 3600',
      },
      {
        title: 'Cores',
        value: 'Hexa-Core',
      },
      {
        title: 'Geheugen',
        value: 'RAM 64GB DDR4',
      },
      {
        title: 'Opslag',
        value: 'SSD 2 x 512 GB',
      },
      {
        title: 'Bandbreedte',
        value: '1 Gbit/s',
      },
      {
        title: 'Aantal klanten',
        value: '1 (Privé server)',
      },
      {
        title: 'Backup frequentie',
        value: 'Dagelijks',
      },
      {
        title: 'Support',
        value: '24 uur per dag',
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        title: 'Processor',
        value: 'AMD Ryzen 7 3700X',
      },
      {
        title: 'Cores',
        value: 'Octa-Core',
      },
      {
        title: 'Geheugen',
        value: 'RAM 64GB DDR4 ECC',
      },
      {
        title: 'Opslag',
        value: 'SSD 2 x 1 TB',
      },
      {
        title: 'Bandbreedte',
        value: '1 Gbit/s',
      },
      {
        title: 'Aantal klanten',
        value: '1 (Privé server)',
      },
      {
        title: 'Backup frequentie',
        value: 'Dagelijks',
      },
      {
        title: 'Support',
        value: '24 uur per dag',
      },
    ],
  },
];

class ContractServiceSingleton {
  selectedTariff = ko.observable(ContractsData[0]);

  init() {
    const getContracts = () => {
      return ContractsData;
    };

    const getInitialTariffsByContract = () => {
      return this.selectedTariff();
    };

    const getTariffsByContract = () => {
      return this.selectedTariff;
    };

    const setSelectedTariff = (index) => {
      this.selectedTariff(ContractsData[index]);
    };

    const getTariffsDetails = () => {
      return TariffsDetails;
    };

    return {
      getContracts,
      getInitialTariffsByContract,
      getTariffsByContract,
      setSelectedTariff,
      getTariffsDetails,
    };
  }
}

const ContractServiceInstance = Object.freeze(new ContractServiceSingleton());
