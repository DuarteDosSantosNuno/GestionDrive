using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GestionDrivApi.Entities;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Http;
using GestionDrivApi.Repositories;
using System.Linq;

namespace authentication.Controllers
{
    [ApiController]
    [Route("user/[controller]")]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<Personne> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private UserRepository _userRepo;

        public AuthenticateController(
            UserManager<Personne> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration,
            UserRepository userRepository)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _userRepo = userRepository;

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            Personne user = await _userManager.FindByEmailAsync(model.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var token = GetToken(authClaims);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register-client")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            Personne userExists = await _userManager.FindByEmailAsync(model.Email);

            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });
            }

            Personne user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Email
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
            }

            await _userManager.AddToRoleAsync(user, "Client");

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByEmailAsync(model.Email);

            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });
            }

            Personne user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
            }

            await _userManager.AddToRoleAsync(user, "Admin");
            await _userManager.AddToRoleAsync(user, "Employee");
            await _userManager.AddToRoleAsync(user, "Client");

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register-employee")]
        public async Task<IActionResult> RegisterEmployee([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByEmailAsync(model.Email);

            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });
            }

            Personne user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
            }

            await _userManager.AddToRoleAsync(user, "Employee");

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }
        
        [HttpGet]
        [Route("findall")]
        public async Task<List<Personne>> Findall()
        {
            return await _userRepo.Findall();
        }

        [HttpPut]
        [Route("modify")]
        public async Task<IActionResult> Modify(Personne user)
        {
            var success = await _userRepo.Modify(user);

            if (!success.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User modification failed!" });
            }
            return Ok(new Response { Status = "Success", Message = "User modified successfully!" });
        }

        [HttpGet]
        [Route("id={id}")]
        public Personne FindById(string id)
        {
            return _userRepo.FindById(id);
        }

        //[HttpGet]
        //[Route("nom={name}")]
        //public Personne FindByName(string name)
        //{
        //    return _userRepo.FindByName(name);
        //}

        //[HttpGet]
        //[Route("prenom={prenom}")]
        //public Personne FindByPrenom(string prenom)
        //{
        //   return _userRepo.FindByPrenom(prenom);
        //}

        [HttpGet]
        [Route("email={email}")]
        public async Task<Personne> FindByEmail(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        [HttpGet]
        [Route("role/client/{id}")]
        public async Task SetRoleClient(string id)
        {
            Personne user = FindById(id);
            await RemoveExistantRoles(id);
            await _userManager.AddToRoleAsync(user, "Client");
        }

        [HttpGet]
        [Route("role/employee/{id}")]
        public async Task SetRoleEmployee(string id)
        {
            Personne user = FindById(id);
            await RemoveExistantRoles(id);
            await _userManager.AddToRoleAsync(user, "Employee");
        }

        [HttpGet]
        [Route("role/admin/{id}")]
        public async Task SetRoleAdmin(string id)
        {
            Personne user = FindById(id);
            await RemoveExistantRoles(id);
            await _userManager.AddToRoleAsync(user, "Admin");
            await _userManager.AddToRoleAsync(user, "Employee");
            await _userManager.AddToRoleAsync(user, "Client");
        }

        [HttpGet]
        [Route("role/remove")]
        public async Task RemoveExistantRoles(string id)
        {
            Personne user = FindById(id);

            var roles = (IEnumerable<string>) await GetRoles(id);

            await _userManager.RemoveFromRolesAsync(user, roles);
        }

        [HttpGet]
        [Route("getroles/{id}")]
        public async Task<List<string>> GetRoles(string id)
        {
            return (List<string>) await _userManager.GetRolesAsync(FindById(id));
        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                //issuer: _configuration["JWT:ValidIssuer"],
                //audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return token;
        }
    }
}