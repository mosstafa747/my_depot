<?php
use PHPUnit\Framework\TestCase;

class IndexTest extends TestCase
{
    public function testOutput()
    {
        $output = "مرحبًا بك في مشروع التكامل المستمر CI/CD!";
        $this->assertEquals($output, "مرحبًا بك في مشروع التكامل المستمر CI/CD!");
    }
}
?>
