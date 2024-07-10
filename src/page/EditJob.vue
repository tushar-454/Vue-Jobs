<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
const toast = useToast();

const route = useRoute();
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${route.params.id}`);
    const job = response.data;
    form.type = job.type;
    form.title = job.title;
    form.description = job.description;
    form.salary = job.salary;
    form.location = job.location;
    form.company.name = job.company.name;
    form.company.description = job.company.description;
    form.company.contactEmail = job.company.contactEmail;
    form.company.contactPhone = job.company.contactPhone;
  } catch (error) {
    console.log('error fetching while feting job', error);
  }
});

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: 'Under $50K',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});

const updateJob = async () => {
  const updateJob = {
    type: form.type,
    title: form.title,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };
  try {
    const response = await axios.put(`/api/jobs/${route.params.id}`, updateJob);
    router.push(`/jobs/${response.data.id}`);
    toast.success('Job update successfully');
  } catch (error) {
    console.log('error fetching while update job', error);
    toast.error('Error while update job');
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0"
      >
        <form @submit.prevent="updateJob">
          <h2 class="mb-6 text-center text-3xl font-semibold">Edit Job</h2>

          <div class="mb-4">
            <label for="type" class="mb-2 block font-bold text-gray-700"
              >Job Type</label
            >
            <select
              id="type"
              name="type"
              class="w-full rounded border px-3 py-2"
              v-model="form.type"
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="mb-2 block font-bold text-gray-700"
              >Job Listing Name</label
            >
            <input
              type="text"
              id="title"
              name="title"
              class="mb-2 w-full rounded border px-3 py-2"
              placeholder="eg. Beautiful Apartment In Miami"
              v-model="form.title"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="mb-2 block font-bold text-gray-700"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              class="w-full rounded border px-3 py-2"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
              v-model="form.description"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="mb-2 block font-bold text-gray-700"
              >Salary</label
            >
            <select
              id="salary"
              name="salary"
              class="w-full rounded border px-3 py-2"
              v-model="form.salary"
              required
            >
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="mb-2 block font-bold text-gray-700"> Location </label>
            <input
              type="text"
              id="location"
              name="location"
              class="mb-2 w-full rounded border px-3 py-2"
              placeholder="Company Location"
              v-model="form.location"
              required
            />
          </div>

          <h3 class="mb-5 text-2xl">Company Info</h3>

          <div class="mb-4">
            <label for="company" class="mb-2 block font-bold text-gray-700"
              >Company Name</label
            >
            <input
              type="text"
              id="company"
              name="company"
              class="w-full rounded border px-3 py-2"
              placeholder="Company Name"
              v-model="form.company.name"
            />
          </div>

          <div class="mb-4">
            <label
              for="company_description"
              class="mb-2 block font-bold text-gray-700"
              >Company Description</label
            >
            <textarea
              id="company_description"
              name="company_description"
              class="w-full rounded border px-3 py-2"
              rows="4"
              placeholder="What does your company do?"
              v-model="form.company.description"
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="contact_email"
              class="mb-2 block font-bold text-gray-700"
              >Contact Email</label
            >
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              class="w-full rounded border px-3 py-2"
              placeholder="Email address for applicants"
              v-model="form.company.contactEmail"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="contact_phone"
              class="mb-2 block font-bold text-gray-700"
              >Contact Phone</label
            >
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="w-full rounded border px-3 py-2"
              placeholder="Optional phone for applicants"
              v-model="form.company.contactPhone"
            />
          </div>

          <div>
            <button
              class="focus:shadow-outline w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none"
              type="submit"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
