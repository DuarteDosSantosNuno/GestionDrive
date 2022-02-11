using backOffice.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace backOffice.Services
{
    public class PersonnesRestServices
    {
        private IHttpContextAccessor _httpContextAccessor;
        private HttpClient _httpClient;
        private JsonSerializerOptions _serializeOptions;
        private const string urlBase = "https://localhost:44329/user/Authenticate";

        public PersonnesRestServices(IHttpContextAccessor httpContextAccessor, 
            HttpClient httpClient)
        {
            _httpContextAccessor = httpContextAccessor;
            _httpClient = httpClient;
            _serializeOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = false
            };
        }

        public async Task<List<Personne>> FindAll()
        {
            var responseHttpClient = await _httpClient.GetAsync($"{urlBase}/findall");

            string responseBody = await ResponseBody(responseHttpClient);

            List<Personne> users = JsonSerializer.Deserialize<List<Personne>>(responseBody, _serializeOptions);

            return users;
        }

        public async Task<List<string>> GetRoles(string id)
        {
            var responseHttpClient = await _httpClient.GetAsync($"{urlBase}/getroles/{id}");

            string responseBody = await ResponseBody(responseHttpClient);

            List<string> userRoles = JsonSerializer.Deserialize<List<string>>(responseBody, _serializeOptions);

            return userRoles;
        }

        public async Task<Personne> FindByEmail(string email)
        {
            var responseHttpClient = await _httpClient.GetAsync($"{urlBase}/email={email}");
            string responseBody = await ResponseBody(responseHttpClient);

            Personne user = JsonSerializer.Deserialize<Personne>(responseBody, _serializeOptions);

            return user;
        }

        private static async Task<string> ResponseBody(HttpResponseMessage responseHttpClient)
        {
            if (responseHttpClient.StatusCode != HttpStatusCode.OK)
            {
                throw new Exception("Can't find the user!!!");
            }

            string responseBody = await responseHttpClient.Content.ReadAsStringAsync();
            return responseBody;
        }
    }
}
