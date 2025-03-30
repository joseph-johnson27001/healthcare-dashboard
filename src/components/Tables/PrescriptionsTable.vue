<template>
  <div class="table-container">
    <div class="table-header">
      <span class="table-title">Prescriptions</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search Prescriptions..."
        class="search-bar"
      />
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Prescription ID</th>
            <th>Patient Name</th>
            <th>Doctor</th>
            <th>Medication</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(prescription, index) in paginatedPrescriptions"
            :key="index"
            :class="{ 'hover-row': true }"
          >
            <td>{{ prescription.id }}</td>
            <td>{{ prescription.patient }}</td>
            <td>{{ prescription.doctor }}</td>
            <td>{{ prescription.medication }}</td>
            <td
              :class="{
                completed: prescription.status === 'Completed',
                pending: prescription.status === 'Pending',
                cancelled: prescription.status === 'Cancelled',
              }"
            >
              {{ prescription.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
    prescriptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: "",
    };
  },
  computed: {
    filteredPrescriptions() {
      return this.prescriptions.filter((prescription) => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          (prescription.id?.toString().toLowerCase() || "").includes(
            searchTerm
          ) ||
          (prescription.patient?.toLowerCase() || "").includes(searchTerm) ||
          (prescription.doctor?.toLowerCase() || "").includes(searchTerm) ||
          (prescription.medication?.toLowerCase() || "").includes(searchTerm) ||
          (prescription.status?.toLowerCase() || "").includes(searchTerm)
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredPrescriptions.length / this.itemsPerPage);
    },
    paginatedPrescriptions() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPrescriptions.slice(start, end);
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
  align-items: center;
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
  width: 300px;
  outline: none;
  font-size: 15px;
  background: none;
  font-family: "Assistant", sans-serif;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  margin-top: 15px;
}

table {
  margin-top: 0;
  width: 100%;
  border-collapse: collapse;
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
  background: #6685ff;
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

.completed {
  color: #28a745;
}

.pending {
  color: #ffc107;
}

.cancelled {
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
  background-color: #6685ff;
  color: white;
}

@media (max-width: 800px) {
  .table-header {
    flex-direction: column;
  }
  .search-bar {
    width: 100%;
    box-sizing: border-box;
    margin-top: 5px;
  }
  .table-title {
    margin-bottom: 5px;
    width: 100%;
  }
}
</style>
