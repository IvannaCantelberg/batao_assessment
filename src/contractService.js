const ContractsData = [
  {
    years: 1,
    monthsGratis: 2,
    tariffs: [
      {
        title: 'Shared',
        perMonth: '179,00',
        price: '149,17',
      },
      {
        title: 'Onager',
        perMonth: '439,00',
        price: '365,83',
      },
      {
        title: 'Scorpio',
        perMonth: '879,00',
        price: '732,50',
      },
    ],
  },
  {
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

class ContractServiceSingleton {
  static instance = null;

  static getInstance() {
    if (!ContractServiceSingleton.instance) {
      ContractServiceSingleton.instance = new ContractServiceSingleton();
    }

    return ContractServiceSingleton.instance;
  }

  constructor() {
    // this.getInstance();
  }

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

    return {
      getContracts,
      getInitialTariffsByContract,
      getTariffsByContract,
      setSelectedTariff,
    };
  }
}

const ContractServiceInstance = Object.freeze(new ContractServiceSingleton());
