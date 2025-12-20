
// FIXED RECORDS ARRAY
const Rec2 = [
    {
        id: 101,
        code: "Add Github",
        description: "Initialize and push to GitHub",
        command: `
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:username/repository.git
git push -u origin main`,
        category: "Git"
    },
    {
        id: 100,
        code: "Update Github",
        description: "Commit and push changes",
        command: `
git add .
git commit -m "Update: Your commit message here"
git push`,
        category: "Git"
    },
    {
        id: 102,
        category: "Git",
        code: "Change Github Repo",
        description: "Change the GitHub repository ",
        command: `
git remote remove origin
git remote add origin https://github.com/username/repository.git
git push --set-upstream origin main`,

    }
];

const Rec1 = [
    {
        id: 1,
        category: "CodeIgniter",
        code: "Web 404 Error",
        description: "Customize the 404 error page in CodeIgniter",
        command: `
$routes->set404Override(function () {
    return view('errors/custom404');
});`
    },
    {
        id: 2,
        category: "CodeIgniter",
        code: "Auth Middleware",
        description: "Implement authentication middleware in CodeIgniter to protect routes from unauthorized access.",
        command: `
public function __construct()
{
    $this->session = session();
    $this->router = service('router');
    $controller = class_basename($this->router->controllerName());
    $method = $this->router->methodName();
    $currentRoute = $controller . '/' . $method;
    $excludedRoutes = [
        'controller/login',
        'controller/sendOtp',
        'controller/sendSMS',
    ];

    $logger = json_decode($_COOKIE["logger"] ?? null);
    $isLoggedIn = $logger->loggedIn ?? null;

    if (empty($isLoggedIn)  && !in_array($currentRoute, $excludedRoutes, true)) {
        echo '<script>window.location.href= "' . base_url() . '";</script>';
    die();
    }
}`
    },
    {
        id: 3,
        category: "CodeIgniter",
        code: "Data Encryption",
        description: "Encrypt data using OpenSSL in CodeIgniter",
        command: `
public function dataEncrypt($value)
{
    $key = "mysecretkey12345678901234567890";
    $iv = openssl_random_pseudo_bytes(16);
    $cipher = "AES-256-CBC";
    $encrypted = openssl_encrypt($value, $cipher, $key, 0, $iv);
    return base64_encode($iv . $encrypted);
}`
    },
    {
        id: 4,
        category: "CodeIgniter",
        code: "Data Decryption",
        description: "Decrypt data using OpenSSL in CodeIgniter",
        command: `
public function dataDecrypt($encryptedData)
{
    $key = "mysecretkey12345678901234567890";
    $cipher = "AES-256-CBC";
    $data = base64_decode($encryptedData);
    $iv = substr($data, 0, 16);
    $encrypted = substr($data, 16);
    return openssl_decrypt($encrypted, $cipher, $key, 0, $iv);
}`
    }, {
        id: 100,
        category: "CodeIgniter",
        code: "Authentication",
        description: "Implement authentication in CodeIgniter using Filter",
        command: `
public array $aliases = [
    'apiauth' => \App\Filters\ApiAuthFilter::class,
];
// Routes
$routes->group('api', ['filter' => 'apiauth'], function ($routes) {
    $routes->post('search', 'Api::searchFunc');
});

//App/Filters/ApiAuthFilter.php


namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class ApiAuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $config = config('AccessProperties');
        $apiKey = $config->api_key;

        $header = $request->getHeaderLine('X-Api');
        $token  = str_replace('Bearer ', '', $header);

        if ($token !== $apiKey) {
            return service('response')
                ->setJSON([
                    'status'  => false,
                    'message' => 'Unauthorized access'
                ])
                ->setStatusCode(401);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // No action required
    }
}
`
    }
];









































// Combine and sort records
const records = [...Rec1, ...Rec2].sort((a, b) => a.id - b.id);


