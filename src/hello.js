 const ViewModel = function() {
    var self = this;
    
    self.templateItems = [{
          id: "1",
          data: [
            {   
                title: "Shared",
                firstPay: "149,17",
                tariff: "179,00",
                savings: "358,00"
            }, 
            {   
                title: "Onager",
                firstPay: "149,17",
                tariff: "179,00",
                savings: "358,00"
            },
            {   
                title: "Scorpio",
                firstPay: "149,17",
                tariff: "179,00",
                savings: "358,00"
            },
            ]
        },
        {
          id: "2",
           data: [
            {   
                title: "Shared",
                firstPay: "1,17",
                tariff: "179,00",
                savings: "358,00"
            }, 
            {   
                title: "Onager",
                firstPay: "1,17",
                tariff: "179,00",
                savings: "358,00"
            },
            {   
                title: "Scorpio",
                firstPay: "1,17",
                tariff: "179,00",
                savings: "358,00"
            },
            ]
        },
        {
          id: "3",
           data: [
                {   
                    title: "Shared",
                    firstPay: "1,17",
                    tariff: "3,00",
                    savings: "358,00"
                }, 
                {   
                    title: "Onager",
                    firstPay: "1,17",
                    tariff: "3,00",
                    savings: "358,00"
                },
                {   
                    title: "Scorpio",
                    firstPay: "1,17",
                    tariff: "3,00",
                    savings: "358,00"
                },
            ]
        },
        
      ];

      //Get href value og element
  self.getHref = function(){
    var target;
    var element = event.target.hash;
    target = element.substr(1);
    return target;
  };

  //Show Tabpanel
  self.showBlock = function(){
    var target = self.getHref();
    self.selected(target);
    self.init(2);
  };


    self.selectTab = function(id, data) {
        console.log(id)
      var tab = this;
      tab.id = ko.observable(id);
      tab.data = ko.observableArray([]);
    
      return tab;
    };

    self.selectedTab = ko.observable(1);
    self.tabs = ko.observableArray([]); 
  }

  
    vm = new ViewModel()
  ko.applyBindings(vm);