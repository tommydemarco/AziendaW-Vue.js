<template>
  <aside class="col-sm-4 mb-5">
    <div class="sidebar-sticky">
    <div class="card">
      <article class="card-group-item">
        <header class="card-header">
          <h5 class="title">Filter by products</h5>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <form>
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="tomatoes" value="null" checked @change="filterProducts" />
                <span class="form-check-label">Organic tomatoes</span>
              </label>
              <!-- form-check.// -->
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="carrots" value="null" checked @change="filterProducts" />
                <span class="form-check-label">Organic carrots</span>
              </label>
              <!-- form-check.// -->
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="peppers" value="null" checked @change="filterProducts"/>
                <span class="form-check-label">Organic peppers</span>
              </label>
              <!-- form-check.// -->
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="zucchini" value="null" checked @change="filterProducts"/>
                <span class="form-check-label">Organic zucchini</span>
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
          <h5 class="title">Filter by price</h5>
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
          <h5 class="title">Filter by seasonality</h5>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <form>
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="seasonal" value="null" checked @change="filterProducts" />
                <span class="form-check-label">Seasonal</span>
              </label>
              <!-- form-check.// -->
              <label class="form-check">
                <input class="form-check-input" type="checkbox" id="allYear" value="null" checked @change="filterProducts" />
                <span class="form-check-label">All-year round</span>
              </label>
              <!-- form-check.// -->
            </form>
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
        tomatoes: true,
        carrots: true,
        zucchini: true,
        peppers: true,
        minPrice: '0',
        maxPrice: '100',
        seasonal: true,
        allYear: true
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
    padding: 17px!important;
}
.card-header h5 {
    margin-bottom:0px;
    font-size: 17px
}
.card-body {
    border-radius: 0px;
    background-color: white;
}
/* .sidebar-sticky {
    position: sticky;
    top: 30px;
} */
</style>