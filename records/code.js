const Rec2 = [
    {
        id: 100,
        code: "Add Github",
        description: `Initialize and push to GitHub`,
        command: `git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:username/repository.git
git push -u origin main`,
        category: "Git"
    },
    {
        id: 101,
        code: "Update Github",
        description: `Commit and push changes`,
        command: `
git add .
git commit -m "Update: Your commit message here"
git push`,
        category: "Git"
    }

];


const Rec1 = [
    {
        category: "CodeIgniter",
        id: 3,
        code: "Web 404 Error",
        description: `
        Customize the 404 error page in CodeIgniter`,
        command: `
$routes->set404Override(function () {
    return view('errors/custom404');
});
`
    }
    ,
    {
        id: 3,
        category: "CodeIgniter",
        code: "Auth Middleware",
        description: `Implement authentication middleware in CodeIgniter to protect routes from unauthorized access.`,
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
        //Inaconstructoryoucan't"return"aresponse;senditandexit
        echo '<script>window.location.href= "' . base_url() . '";</script>';
        die();
    }
}
    `
    }, {
        id: 4,
        category: "CodeIgniter",
        code: "Data Encryption",
        description: `Encrypt data using OpenSSL in CodeIgniter`,
        command: `
public function dataEncrypt($value)
{
    $key    = "mysecretkey12345678901234567890"; // 32 chars (AES-256)
    $iv     = openssl_random_pseudo_bytes(16);
    $cipher = "AES-256-CBC";
    $encrypted = openssl_encrypt($value, $cipher, $key, 0, $iv);
    return base64_encode($iv . $encrypted);
}

`
    }
    , {
        id: 5,
        category: "CodeIgniter",
        code: "Data Decryption",
        description: `Decrypt data using OpenSSL in CodeIgniter`,
        command: `
public function dataDecrypt($encryptedData)
{
    $key       = "mysecretkey12345678901234567890"; // same key
    $cipher    = "AES-256-CBC";

    $data      = base64_decode($encryptedData);

    $iv        = substr($data, 0, 16);
    $encrypted = substr($data, 16);

    return openssl_decrypt($encrypted, $cipher, $key, 0, $iv);
}
`    }, {

    }
]


const records = [...Rec1, ...Rec2].sort((a, b) => a.id - b.id);





export default records;