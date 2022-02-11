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
        private const string urlBase = "https://localhost:44329/user/Authenticate/";

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
            var responseHttpClient = await _httpClient.GetAsync($"{urlBase}findall");

            if (responseHttpClient.StatusCode != HttpStatusCode.OK)
            {
                throw new Exception("Can't find the users!!!");
            }

            string responseBody = await responseHttpClient.Content.ReadAsStringAsync();

            List<Personne> users = JsonSerializer.Deserialize<List<Personne>>(responseBody, _serializeOptions);

            return users;
        }
    }
}
