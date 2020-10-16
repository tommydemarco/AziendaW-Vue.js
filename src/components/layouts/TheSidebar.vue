<template>
  <aside class="col-sm-4">
    <div class="sidebar-sticky">
    <div class="card">
      <article class="card-group-item">
        <header class="card-header">
          <h6 class="title">Brands</h6>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <form>
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="vinoRosso" value="null" checked @change="filterProducts" />
                <span class="form-check-label"> Vino Rosso </span>
              </label>
              <!-- form-check.// -->
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="vinoBianco" value="null" checked @change="filterProducts" />
                <span class="form-check-label"> Vino Bianco </span>
              </label>
              <!-- form-check.// -->
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="vinoRose" value="null" checked @change="filterProducts"/>
                <span class="form-check-label"> Vino Rosè </span>
              </label>
              <!-- form-check.// -->
            </form>
          </div>
          <!-- card-body.// -->
        </div>
      </article>
      <!-- card-group-item.// -->
    </div>
    
    <div class="card">
      <article class="card-group-item">
        <header class="card-header">
          <h6 class="title">Range input</h6>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Min</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="€0"
                  v-model="filter.minPrice"
                  @change="filterProducts"
                />
              </div>
              <div class="form-group col-md-6 text-right">
                <label>Max</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="€10.000"
                  v-model="filter.maxPrice"
                  @change="filterProducts"
                />
              </div>
            </div>
          </div>
          <!-- card-body.// -->
        </div>
      </article>
      <!-- card-group-item.// -->
    </div>

    <div class="card">
      <article class="card-group-item">
        <header class="card-header">
          <h6 class="title">Selection</h6>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <div class="custom-control custom-checkbox">
              <span class="float-right badge badge-light round">52</span>
              <input type="checkbox" class="custom-control-input" id="Check1" />
              <label class="custom-control-label" for="Check1">Samsung</label>
            </div>
            <!-- form-check.// -->

            <div class="custom-control custom-checkbox">
              <span class="float-right badge badge-light round">132</span>
              <input type="checkbox" class="custom-control-input" id="Check2" />
              <label class="custom-control-label" for="Check2"
                >Black berry</label
              >
            </div>
            <!-- form-check.// -->

            <div class="custom-control custom-checkbox">
              <span class="float-right badge badge-light round">17</span>
              <input type="checkbox" class="custom-control-input" id="Check3" />
              <label class="custom-control-label" for="Check3">Samsung</label>
            </div>
            <!-- form-check.// -->

            <div class="custom-control custom-checkbox">
              <span class="float-right badge badge-light round">7</span>
              <input type="checkbox" class="custom-control-input" id="Check4" />
              <label class="custom-control-label" for="Check4"
                >Other Brand</label
              >
            </div>
            <!-- form-check.// -->
          </div>
          <!-- card-body.// -->
        </div>
      </article>
    </div>
    </div>
  </aside>
</template>

<script>
export default {
  emits: ['change-filters'],
  data() {
    return {
      filter: {
        vinoRosso: true,
        vinoBianco: true,
        vinoRose: true,
        minPrice: '0',
        maxPrice: '10000'
      }
    }
  }, 
  methods: {
    filterProducts() {
      if (event.target.id) {
        const filterId = event.target.id;
        const modifiedFilter = event.target.checked
        const updatedFilters = {
          ...this.filter,
          [filterId]: modifiedFilter
        }
        this.filter = updatedFilters
        this.$emit('change-filters', updatedFilters)
      } else {
        const updatedFilters = {
          ...this.filter,
        }
        this.filter = updatedFilters
        this.$emit('change-filters', updatedFilters)
      }      
    }
  }
}
</script>

<style scoped>
.card {
    border-radius: 0px;
    border: 0px;
}
.card-header {
    background-color: #16a085;
    color: white;
    border-radius: 0px!important;
}
.card-header h6 {
    margin-bottom:0px;
}
.card-body {
    border-radius: 0px;
    background-color: white;
}
.sidebar-sticky {
    position: sticky;
    top: 30px;
}
</style>