<template>
  <div class="table-container">
    <div class="table-header">
      <span class="table-title">Doctor Information</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search Doctors..."
        class="search-bar"
      />
    </div>

    <table>
      <thead>
        <tr>
          <th>Doctor ID</th>
          <th>Doctor Name</th>
          <th>Specialty</th>
          <th>Current Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(doctor, index) in paginatedDoctors"
          :key="index"
          :class="{ 'hover-row': true }"
        >
          <td>{{ doctor.id }}</td>
          <td>{{ doctor.name }}</td>
          <td>{{ doctor.specialty }}</td>
          <td>{{ doctor.currentLocation }}</td>
          <td
            :class="{
              available: doctor.status === 'Available',
              unavailable: doctor.status === 'Unavailable',
            }"
          >
            {{ doctor.status }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="pagination">
      <div class="page-numbers">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ 'active-page': currentPage === pageNumber }"
          @click="goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doctors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: "",
    };
  },
  computed: {
    filteredDoctors() {
      return this.doctors.filter((doctor) => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          doctor.id.toLowerCase().includes(searchTerm) ||
          doctor.name.toLowerCase().includes(searchTerm) ||
          doctor.specialty.toLowerCase().includes(searchTerm) ||
          doctor.currentLocation.toLowerCase().includes(searchTerm) ||
          doctor.status.toLowerCase().includes(searchTerm)
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredDoctors.length / this.itemsPerPage);
    },
    paginatedDoctors() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredDoctors.slice(start, end);
    },
  },
  methods: {
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
  },
};
</script>

<style scoped>
.table-container {
  background-color: #ffffff;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.table-title {
  font-family: "Assistant", sans-serif;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #345a98;
}

.search-bar {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 300px;
  outline: none;
  font-size: 15px;
  background: none;
  font-family: "Assistant", sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th,
td {
  padding: 15px;
  border-left: none;
  border-right: none;
  text-align: left;
  font-size: 14px;
}

th {
  background: rgba(50, 180, 120);
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

td {
  color: #444;
}

tr:hover {
  background-color: rgba(39, 148, 97, 0.1);
}

.available {
  color: #28a745;
}

.unavailable {
  color: #ff4d4d;
}

.hover-row:hover td {
  background-color: #f0f0f1;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
}

.page-numbers {
  display: flex;
  gap: 8px;
}

.page-numbers button {
  background-color: #f1f1f1;
  color: #444;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.page-numbers button.active-page {
  background-color: #28a745;
  color: white;
}
</style>
