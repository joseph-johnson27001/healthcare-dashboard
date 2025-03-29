<template>
  <div class="table-container">
    <div class="table-header">
      <span class="table-title">Medical Records</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search Medical Records..."
        class="search-bar"
      />
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Record ID</th>
            <th>Patient Name</th>
            <th>Doctor</th>
            <th>Diagnosis</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(record, index) in paginatedRecords"
            :key="index"
            :class="{ 'hover-row': true }"
            @click="navigateToRecord(record.id)"
          >
            <td>{{ record.id }}</td>
            <td>{{ record.patientName }}</td>
            <td>{{ record.doctor }}</td>
            <td>{{ record.diagnosis }}</td>
            <td>{{ record.date }}</td>
            <td
              :class="{
                completed: record.status === 'Completed',
                ongoing: record.status === 'Ongoing',
                closed: record.status === 'Closed',
              }"
            >
              {{ record.status }}
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
    records: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 20,
    };
  },
  computed: {
    filteredRecords() {
      return this.records.filter((record) => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          (record.id && record.id.toLowerCase().includes(searchTerm)) ||
          (record.patientName &&
            record.patientName.toLowerCase().includes(searchTerm)) ||
          (record.doctor && record.doctor.toLowerCase().includes(searchTerm)) ||
          (record.diagnosis &&
            record.diagnosis.toLowerCase().includes(searchTerm)) ||
          (record.status && record.status.toLowerCase().includes(searchTerm))
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredRecords.length / this.itemsPerPage);
    },
    paginatedRecords() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredRecords.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    navigateToRecord(id) {
      this.$router.push(`/medical-record/${id}`);
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

.completed {
  color: #28a745;
}

.ongoing {
  color: #ffc107;
}

.closed {
  color: #dc3545;
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
