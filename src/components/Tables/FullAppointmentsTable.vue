<template>
  <div class="table-container">
    <div class="table-header">
      <span class="table-title">Appointments</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search Appointments..."
        class="search-bar"
      />
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(appointment, index) in paginatedAppointments"
            :key="index"
            :class="{ 'hover-row': true }"
            @click="navigateToAppointment(appointment.id)"
          >
            <td>{{ appointment.patient }}</td>
            <td>{{ appointment.doctor }}</td>
            <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td>
            <td
              :class="{
                scheduled: appointment.status === 'Scheduled',
                finished: appointment.status === 'Finished',
              }"
            >
              {{ appointment.status }}
            </td>
            <td>{{ appointment.room }}</td>
          </tr>
        </tbody>
      </table>
    </div>

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
    appointments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 20,
      searchQuery: "",
    };
  },
  computed: {
    filteredAppointments() {
      return this.appointments.filter((appointment) => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          appointment.doctor.toLowerCase().includes(searchTerm) ||
          appointment.patient.toLowerCase().includes(searchTerm) ||
          appointment.date.toLowerCase().includes(searchTerm) ||
          appointment.time.toLowerCase().includes(searchTerm) ||
          appointment.status.toLowerCase().includes(searchTerm) ||
          appointment.room.toLowerCase().includes(searchTerm)
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredAppointments.length / this.itemsPerPage);
    },
    paginatedAppointments() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredAppointments.slice(start, end);
    },
  },
  methods: {
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    navigateToAppointment(id) {
      this.$router.push(`/appointment/${id}`);
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

.scheduled {
  color: #28a745;
}

.finished {
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
