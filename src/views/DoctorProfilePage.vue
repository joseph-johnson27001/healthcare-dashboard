<template>
  <div class="doctor-profile">
    <!-- Doctor Header Section -->
    <div class="doctor-header-container">
      <ContainerCard>
        <div class="doctor-header">
          <img
            v-if="doctor.profilePicture"
            :src="doctor.profilePicture"
            alt="Doctor Profile"
            class="profile-pic"
          />
          <div class="doctor-info">
            <h1 class="doctor-name">{{ doctor.name }}</h1>
            <p><strong>Specialty:</strong> {{ doctor.specialty }}</p>
            <p>
              <strong>Current Location:</strong>
              {{ doctor.currentLocation }}
            </p>
            <p class="status" :class="doctor.status.toLowerCase()">
              <strong>Status:</strong> {{ doctor.status }}
            </p>
          </div>
        </div>
      </ContainerCard>

      <ContainerCard>
        <div class="contact-credentials">
          <p><strong>Phone:</strong> {{ doctor.contact.phone }}</p>
          <p><strong>Email:</strong> {{ doctor.contact.email }}</p>
          <p><strong>Experience:</strong> {{ doctor.experience }} years</p>
          <p><strong>Medical License:</strong> {{ doctor.license }}</p>
          <p><strong>Education:</strong> {{ doctor.education }}</p>
        </div>
      </ContainerCard>
    </div>

    <!-- KPI Cards -->
    <div class="kpi-section">
      <KPICard
        v-for="(kpi, index) in kpis"
        :key="index"
        :iconClass="kpi.icon"
        :kpiName="kpi.name"
        :value="kpi.value"
        :iconColor="kpi.iconColor"
        :iconContainerColor="kpi.iconContainerColor"
      />
    </div>
  </div>
</template>
<style scoped>
.doctor-header-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}

.doctor-header {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.doctor-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.status {
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
}

.available {
  color: #28c76f;
  background: rgba(39, 148, 97, 0.1);
}

.unavailable {
  color: #ff4d4d;
  background: rgba(255, 77, 77, 0.1);
}

.kpi-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
}

@media (max-width: 800px) {
  .kpi-section {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .kpi-section {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
import KPICard from "@/components/UI/KPICard.vue";
import ContainerCard from "@/components/UI/ContainerCard.vue";

export default {
  name: "DoctorProfilePage",
  components: {
    KPICard,
    ContainerCard,
  },
  data() {
    return {
      doctor: null,
      kpis: [],
      doctors: [
        {
          id: "D001",
          name: "Dr. John Doe",
          specialty: "Cardiology",
          currentLocation: "Cardiology Department, City Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
          contact: { phone: "+1 234 567 890", email: "johndoe@example.com" },
          experience: 15,
          license: "MD-123456",
          education: "Harvard Medical School",
        },
        {
          id: "D002",
          name: "Dr. Jane Smith",
          specialty: "Neurology",
          currentLocation: "Neurology Clinic, Downtown Health Center",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
          contact: { phone: "+1 987 654 321", email: "janesmith@example.com" },
          experience: 10,
          license: "MD-654321",
          education: "Johns Hopkins University",
        },
        {
          id: "D003",
          name: "Dr. Emily White",
          specialty: "Orthopedics",
          currentLocation: "Orthopedic Ward, City Medical Center",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
          contact: { phone: "+1 456 789 012", email: "emilywhite@example.com" },
          experience: 12,
          license: "MD-789012",
          education: "Stanford University",
        },
        {
          id: "D004",
          name: "Dr. Michael Brown",
          specialty: "Pediatrics",
          currentLocation: "Pediatric Unit, Children's Hospital",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
          contact: {
            phone: "+1 321 654 987",
            email: "michaelbrown@example.com",
          },
          experience: 9,
          license: "MD-321654",
          education: "Yale School of Medicine",
        },
        {
          id: "D005",
          name: "Dr. Sarah Johnson",
          specialty: "Dermatology",
          currentLocation: "Dermatology Clinic, Westside Medical",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
          contact: {
            phone: "+1 654 321 789",
            email: "sarahjohnson@example.com",
          },
          experience: 14,
          license: "MD-654987",
          education: "Columbia University",
        },
        {
          id: "D006",
          name: "Dr. David Lee",
          specialty: "General Surgery",
          currentLocation: "Surgical Unit, Regional Hospital",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
          contact: { phone: "+1 111 222 333", email: "davidlee@example.com" },
          experience: 20,
          license: "MD-852963",
          education: "Mayo Clinic School of Medicine",
        },
        {
          id: "D007",
          name: "Dr. Jessica Green",
          specialty: "Obstetrics & Gynecology",
          currentLocation: "OB/GYN Department, City Medical Center",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
          contact: {
            phone: "+1 444 555 666",
            email: "jessicagreen@example.com",
          },
          experience: 11,
          license: "MD-789654",
          education: "University of Pennsylvania",
        },
        {
          id: "D008",
          name: "Dr. Robert Adams",
          specialty: "Psychiatry",
          currentLocation: "Psychiatric Ward, State Mental Health Center",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
          contact: {
            phone: "+1 777 888 999",
            email: "robertadams@example.com",
          },
          experience: 18,
          license: "MD-963852",
          education: "Duke University School of Medicine",
        },
        {
          id: "D009",
          name: "Dr. Lisa Thompson",
          specialty: "Endocrinology",
          currentLocation: "Endocrinology Clinic, Northside Hospital",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
          contact: {
            phone: "+1 555 123 456",
            email: "lisathompson@example.com",
          },
          experience: 13,
          license: "MD-159753",
          education: "University of Chicago",
        },
        {
          id: "D010",
          name: "Dr. William Harris",
          specialty: "Gastroenterology",
          currentLocation: "Gastroenterology Department, Downtown Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
          contact: {
            phone: "+1 222 333 444",
            email: "williamharris@example.com",
          },
          experience: 17,
          license: "MD-357951",
          education: "University of Michigan Medical School",
        },
        {
          id: "D011",
          name: "Dr. Anna Clark",
          specialty: "Rheumatology",
          currentLocation: "Rheumatology Clinic, Central Health Center",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/women/11.jpg",
          contact: { phone: "+1 777 222 111", email: "annaclark@example.com" },
          experience: 16,
          license: "MD-741852",
          education: "University of California, San Francisco",
        },
        {
          id: "D012",
          name: "Dr. George King",
          specialty: "Hematology",
          currentLocation: "Hematology Department, City Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/men/12.jpg",
          contact: { phone: "+1 888 999 000", email: "georgeking@example.com" },
          experience: 14,
          license: "MD-258369",
          education: "Harvard Medical School",
        },
        {
          id: "D013",
          name: "Dr. Charlotte Adams",
          specialty: "Oncology",
          currentLocation: "Cancer Unit, State Medical Center",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/13.jpg",
          contact: {
            phone: "+1 111 444 777",
            email: "charlotteadams@example.com",
          },
          experience: 19,
          license: "MD-369258",
          education: "Johns Hopkins University",
        },
        {
          id: "D014",
          name: "Dr. Peter Walker",
          specialty: "Nephrology",
          currentLocation: "Kidney Clinic, Downtown Hospital",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/men/14.jpg",
          contact: {
            phone: "+1 666 555 444",
            email: "peterwalker@example.com",
          },
          experience: 11,
          license: "MD-654321",
          education: "Columbia University",
        },
        {
          id: "D015",
          name: "Dr. Olivia Martin",
          specialty: "Pediatric Surgery",
          currentLocation: "Surgical Unit, Children's Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/15.jpg",
          contact: {
            phone: "+1 333 222 111",
            email: "oliviamartin@example.com",
          },
          experience: 12,
          license: "MD-753159",
          education: "University of Toronto",
        },
        {
          id: "D016",
          name: "Dr. Thomas Harris",
          specialty: "Pulmonology",
          currentLocation: "Lung Care Unit, City Medical Center",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/men/16.jpg",
          contact: {
            phone: "+1 999 888 777",
            email: "thomasharris@example.com",
          },
          experience: 18,
          license: "MD-852147",
          education: "Mayo Clinic School of Medicine",
        },
        {
          id: "D017",
          name: "Dr. Laura Lee",
          specialty: "Infectious Diseases",
          currentLocation: "Infectious Disease Department, State Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/17.jpg",
          contact: { phone: "+1 111 222 333", email: "lauralee@example.com" },
          experience: 15,
          license: "MD-951753",
          education: "Stanford University",
        },
        {
          id: "D018",
          name: "Dr. Kevin Wright",
          specialty: "Emergency Medicine",
          currentLocation: "Emergency Room, Downtown Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/men/18.jpg",
          contact: {
            phone: "+1 234 567 890",
            email: "kevinwright@example.com",
          },
          experience: 14,
          license: "MD-789456",
          education: "Yale School of Medicine",
        },
        {
          id: "D019",
          name: "Dr. Grace Evans",
          specialty: "Plastic Surgery",
          currentLocation: "Plastic Surgery Clinic, Westside Hospital",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/women/19.jpg",
          contact: { phone: "+1 345 678 901", email: "graceevans@example.com" },
          experience: 16,
          license: "MD-987321",
          education: "University of Pennsylvania",
        },
        {
          id: "D020",
          name: "Dr. James Young",
          specialty: "Urology",
          currentLocation: "Urology Department, Central Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/men/20.jpg",
          contact: { phone: "+1 456 789 012", email: "jamesyoung@example.com" },
          experience: 12,
          license: "MD-654987",
          education: "Duke University School of Medicine",
        },
        {
          id: "D021",
          name: "Dr. Megan Turner",
          specialty: "Geriatrics",
          currentLocation: "Geriatric Care Unit, Eastside Medical Center",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/21.jpg",
          contact: {
            phone: "+1 567 890 123",
            email: "meganturner@example.com",
          },
          experience: 18,
          license: "MD-321789",
          education: "Northwestern University",
        },
        {
          id: "D022",
          name: "Dr. Frank Baker",
          specialty: "Vascular Surgery",
          currentLocation: "Vascular Surgery Clinic, City Medical Center",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/men/22.jpg",
          contact: { phone: "+1 678 901 234", email: "frankbaker@example.com" },
          experience: 20,
          license: "MD-852963",
          education: "University of Washington",
        },
        {
          id: "D023",
          name: "Dr. Nancy Moore",
          specialty: "Radiology",
          currentLocation: "Radiology Department, North Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/23.jpg",
          contact: { phone: "+1 789 012 345", email: "nancymoore@example.com" },
          experience: 17,
          license: "MD-147258",
          education: "University of Southern California",
        },
        {
          id: "D024",
          name: "Dr. Daniel Carter",
          specialty: "Ophthalmology",
          currentLocation: "Eye Care Center, Downtown Medical Center",
          status: "Unavailable",
          profilePicture: "https://randomuser.me/api/portraits/men/24.jpg",
          contact: {
            phone: "+1 890 123 456",
            email: "danielcarter@example.com",
          },
          experience: 13,
          license: "MD-369147",
          education: "University of Miami Miller School of Medicine",
        },
        {
          id: "D025",
          name: "Dr. Susan Lee",
          specialty: "Anesthesiology",
          currentLocation: "Surgical Anesthesia Unit, Regional Hospital",
          status: "Available",
          profilePicture: "https://randomuser.me/api/portraits/women/25.jpg",
          contact: { phone: "+1 901 234 567", email: "susanlee@example.com" },
          experience: 15,
          license: "MD-258147",
          education: "Boston University School of Medicine",
        },
      ],
    };
  },
  created() {
    const doctorId = this.$route.params.id;
    this.doctor = this.doctors.find((doc) => doc.id === doctorId);

    if (this.doctor) {
      this.kpis = [
        {
          icon: "fas fa-user-injured",
          name: "Total Patients Treated",
          value: "2,345",
        },
        {
          icon: "fas fa-clock",
          name: "Avg. Consultation Time",
          value: "25 min",
        },
        {
          icon: "fas fa-calendar-check",
          name: "Appointments This Month",
          value: "120",
        },
        {
          icon: "fas fa-stethoscope",
          name: "Most Treated Condition",
          value: "Hypertension",
        },
        {
          icon: "fas fa-heartbeat",
          name: "Treatment Success Rate",
          value: "95%",
        },
        {
          icon: "fas fa-notes-medical",
          name: "Upcoming Appointments",
          value: "8",
        },
      ];
    }
  },
};
</script>
