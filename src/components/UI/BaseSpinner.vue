<template>
    <div class="preloader">
		<div>
			<div class="nb-spinner"></div>
		</div>
	</div>
</template>

<style scoped>
.preloader {
  width: 100%;
  height: 300px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.preloader > div {
  width: inherit;
  height: 300px;
  flex: 0 0 25%;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.nb-spinner {
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #007b5e;
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>