using backOffice.Services;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;

namespace backOffice.ConfigExtension
{
    public static class CustomUserInjectionService
    {
        public static void AddCustomUserInjectionService(this IServiceCollection services)
        {
            services.AddTransient<HttpClient, HttpClient>();
            services.AddTransient<PersonnesRestServices, PersonnesRestServices>();
        }
    }
}
