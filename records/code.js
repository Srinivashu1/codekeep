// FIXED RECORDS ARRAY
const records = [
    {
        "category": "Git",
        "code": "Add Github",
        "description": "Initialize and push to GitHub",
        "command": "git init\ngit add .\ngit commit -m \"Initial commit\"\ngit branch -M main\ngit remote add origin git@github.com:username/repository.git\ngit push -u origin main",
        "id": 2
    },
    {
        "category": "Git",
        "code": "Update Github",
        "description": "Commit and push changes",
        "command": "git add .\ngit commit -m \"Update: Your commit message here\"\ngit push",
        "id": 3
    },
    {
        "category": "CodeIgniter",
        "code": "Web 404 Error",
        "description": "Customize the 404 error page in CodeIgniter",
        "command": "$routes->set404Override(function () {\n    return view('errors/custom404');\n});",
        "id": 4
    },
    {
        "category": "CodeIgniter",
        "code": "Auth Middleware",
        "description": "Implement authentication middleware in CodeIgniter to protect routes from unauthorized access.",
        "command": "public function __construct()\n{\n    $this->session = session();\n    $this->router = service('router');\n    $controller = class_basename($this->router->controllerName());\n    $method = $this->router->methodName();\n    $currentRoute = $controller . '/' . $method;\n    $excludedRoutes = [\n        'controller/login',\n        'controller/sendOtp',\n        'controller/sendSMS',\n    ];\n\n    $logger = json_decode($_COOKIE[\"logger\"] ?? null);\n    $isLoggedIn = $logger->loggedIn ?? null;\n\n    if (empty($isLoggedIn)  && !in_array($currentRoute, $excludedRoutes, true)) {\n        echo '<script>window.location.href= \"' . base_url() . '\";</script>';\n    die();\n    }\n}",
        "id": 5
    },
    {
        "category": "Git",
        "code": "Change Github Rep",
        "description": "Change the GitHub repository",
        "command": "git remote remove origin\ngit remote add origin https://github.com/username/repository.git\ngit push --set-upstream origin main",
        "id": 6
    },
    {
        "category": "CodeIgniter",
        "code": "Data Encryption",
        "description": "Encrypt data using OpenSSL in CodeIgniter",
        "command": "public function dataEncrypt($value)\n{\n    $key = \"mysecretkey12345678901234567890\";\n    $iv = openssl_random_pseudo_bytes(16);\n    $cipher = \"AES-256-CBC\";\n    $encrypted = openssl_encrypt($value, $cipher, $key, 0, $iv);\n    return base64_encode($iv . $encrypted);\n}",
        "id": 7
    },
    {
        "category": "CodeIgniter",
        "code": "Data Decryption",
        "description": "Decrypt data using OpenSSL in CodeIgniter",
        "command": "public function dataDecrypt($encryptedData)\n{\n    $key = \"mysecretkey12345678901234567890\";\n    $cipher = \"AES-256-CBC\";\n    $data = base64_decode($encryptedData);\n    $iv = substr($data, 0, 16);\n    $encrypted = substr($data, 16);\n    return openssl_decrypt($encrypted, $cipher, $key, 0, $iv);\n}",
        "id": 8
    },
    {
        "category": "CodeIgniter",
        "code": "Authentication",
        "description": "Implement authentication in CodeIgniter using Filter",
        "command": "public array $aliases = [\n    'apiauth' => \\App\\Filters\\ApiAuthFilter::class,\n];\n// Routes\n$routes->group('api', ['filter' => 'apiauth'], function ($routes) {\n    $routes->post('search', 'Api::searchFunc');\n});\n\n//App/Filters/ApiAuthFilter.php\n\n\nnamespace App\\Filters;\n\nuse CodeIgniter\\HTTP\\RequestInterface;\nuse CodeIgniter\\HTTP\\ResponseInterface;\nuse CodeIgniter\\Filters\\FilterInterface;\n\nclass ApiAuthFilter implements FilterInterface\n{\n    public function before(RequestInterface $request, $arguments = null)\n    {\n        $config = config('AccessProperties');\n        $apiKey = $config->api_key;\n\n        $header = $request->getHeaderLine('X-Api');\n        $token  = str_replace('Bearer ', '', $header);\n\n        if ($token !== $apiKey) {\n            return service('response')\n                ->setJSON([\n                    'status'  => false,\n                    'message' => 'Unauthorized access'\n                ])\n                ->setStatusCode(401);\n        }\n    }\n\n    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)\n    {\n        // No action required\n    }\n}",
        "id": 9
    },
    {
        "category": "CodeIgniter",
        "code": "bcvnbv",
        "description": "edswd",
        "command": "wdswasd",
        "id": 10
    },
    {
        "category": "CodeIgniter",
        "code": "bcvnbv",
        "description": "vxc",
        "command": "xv",
        "id": 11
    },
    {
        "category": "HTML",
        "code": "bcvnbv",
        "description": "xfb vb",
        "command": "b vvb v",
        "id": 12
    }
];
