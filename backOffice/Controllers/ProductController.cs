using Microsoft.AspNetCore.Mvc;

namespace backOffice.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
