ko.components.register('contract', {
  template: `
  <div class="card-sm relative cursor-pointer hovered" 
            data-bind="click: selectContract, clickBubble: false, css: {'active': isSelected() } ">
        <!-- ko ifnot: !data.monthsGratis -->
        <span class="label">
            <span data-bind="text: data.monthsGratis"></span> maanden gratis
        </span>
        <!-- /ko -->
        <div class="flex gap-4 mt-2">
            <!-- ko ifnot: !data.years -->
            <p class="count" data-bind="text: data.years"></p>
            <!-- /ko -->
            <div>
                <p class="title">Jaar contract</p>
                <p class="sub-title">Incl. verhuis service</p>
            </div>
        </div>
    </div>
  `,
  viewModel: function (params) {
    const self = this;

    self.index = params.index();
    self.data = params.data;
    self.isSelected = params.isSelected;

    selectContract = (data) => {
      params.onSelect(data.index);
    };
  },
});
